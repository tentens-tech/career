// Validates the role data. Exit code 1 on any problem, so it can gate CI and builds.
//   node scripts/validate-matrix.mjs
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { loadRoles } from './build-matrix.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const isObject = v => v !== null && typeof v === 'object' && !Array.isArray(v)

export function validate() {
  const errors = []
  const schema = JSON.parse(readFileSync(join(root, 'data/schema.json'), 'utf8'))

  let loaded
  try {
    loaded = loadRoles()
  }
  catch (error) {
    return [error.message]
  }
  const { matrix, unused } = loaded

  for (const name of unused)
    errors.push(`shared/${name}.json is not referenced by any role`)

  // roles <-> schema <-> prerender routes
  const roles = Object.keys(matrix)
  for (const role of roles) {
    if (!(role in schema.roles))
      errors.push(`role "${role}" is missing in data/schema.json`)
  }
  for (const role of Object.keys(schema.roles)) {
    if (!roles.includes(role))
      errors.push(`data/roles/${role}.json is missing (declared in data/schema.json)`)
  }
  const nuxtConfig = readFileSync(join(root, 'nuxt.config.ts'), 'utf8')
  for (const role of Object.keys(schema.roles)) {
    if (!nuxtConfig.includes(`'/tech-career/${role}'`))
      errors.push(`nuxt.config.ts: no prerender route for /tech-career/${role}`)
  }

  const isLeaf = v => typeof v === 'string'

  for (const [role, categories] of Object.entries(matrix)) {
    const grades = schema.gradeSets[schema.roles[role]]
    if (!grades)
      continue

    const checkGrades = (node, path) => {
      for (const [grade, text] of Object.entries(node)) {
        if (!grades.includes(grade))
          errors.push(`${path}: unknown grade "${grade}" (allowed: ${grades.join(', ')})`)
        if (!isLeaf(text) || text.trim() === '')
          errors.push(`${path}/${grade}: description must be a non-empty string`)
      }
    }

    for (const [category, value] of Object.entries(categories)) {
      const at = `${role}/${category.trim()}`
      if (category !== category.trim())
        errors.push(`${at}: key has leading/trailing whitespace`)
      if (!isObject(value) || Object.keys(value).length === 0) {
        errors.push(`${at}: must be a non-empty object`)
        continue
      }

      const children = Object.entries(value)
      const leaves = children.filter(([, v]) => isLeaf(v)).length
      if (leaves === children.length) {
        checkGrades(value, at) // category -> grade -> text
      }
      else if (leaves === 0) {
        for (const [sub, node] of children) { // category -> subskill -> grade -> text
          if (sub !== sub.trim())
            errors.push(`${at}/${sub.trim()}: key has leading/trailing whitespace`)
          if (!isObject(node) || Object.keys(node).length === 0)
            errors.push(`${at}/${sub}: must be a non-empty object`)
          else
            checkGrades(node, `${at}/${sub}`)
        }
      }
      else {
        errors.push(`${at}: mixes grade texts and sub-skills (the UI requires one or the other)`)
      }
    }
  }
  return errors
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const errors = validate()
  if (errors.length) {
    console.error(`matrix validation failed (${errors.length}):`)
    for (const e of errors) console.error(`  - ${e}`)
    process.exit(1)
  }
  console.log('matrix validation passed')
}
