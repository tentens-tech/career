// Assembles data/roles/*.json (+ data/shared/*.json) into the single object
// the app imports: data/matrix.generated.json
//
// A category inside a role file is either plain content, or a reference to a
// shared block:   "Culture": { "$ref": "culture", "$patch": { ...optional overrides... } }
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(root, 'data')

const isObject = v => v !== null && typeof v === 'object' && !Array.isArray(v)

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  }
  catch (error) {
    throw new Error(`${file}: ${error.message}`)
  }
}

function listJson(dir) {
  return readdirSync(dir).filter(f => f.endsWith('.json')).sort()
}

// Patch may only override existing leaves or add keys; it never deletes.
function deepMerge(base, patch, path) {
  const out = structuredClone(base)
  for (const [key, value] of Object.entries(patch)) {
    if (isObject(value) && isObject(out[key]))
      out[key] = deepMerge(out[key], value, `${path}/${key}`)
    else if (typeof value === 'string' || (isObject(value) && out[key] === undefined))
      out[key] = value
    else
      throw new Error(`${path}/${key}: $patch shape does not match the shared block`)
  }
  return out
}

export function loadShared() {
  const shared = {}
  for (const file of listJson(join(dataDir, 'shared')))
    shared[basename(file, '.json')] = readJson(join(dataDir, 'shared', file))
  return shared
}

export function loadRoles() {
  const shared = loadShared()
  const used = new Set()
  const matrix = {}

  for (const file of listJson(join(dataDir, 'roles'))) {
    const role = basename(file, '.json')
    const where = `roles/${file}`
    const categories = readJson(join(dataDir, 'roles', file))
    if (!isObject(categories))
      throw new Error(`${where}: must be an object`)

    matrix[role] = {}
    for (const [category, value] of Object.entries(categories)) {
      if (isObject(value) && '$ref' in value) {
        const { $ref, $patch, ...rest } = value
        if (Object.keys(rest).length)
          throw new Error(`${where}/${category}: only $ref and $patch are allowed next to $ref`)
        if (!(typeof $ref === 'string' && $ref in shared))
          throw new Error(`${where}/${category}: unknown shared block "${$ref}"`)
        used.add($ref)
        matrix[role][category] = $patch === undefined
          ? structuredClone(shared[$ref])
          : deepMerge(shared[$ref], $patch, `${where}/${category}`)
      }
      else {
        matrix[role][category] = value
      }
    }
  }

  const unused = Object.keys(shared).filter(name => !used.has(name))
  return { matrix, shared, unused }
}

export function buildMatrix() {
  return loadRoles().matrix
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = join(dataDir, 'matrix.generated.json')
  if (!existsSync(join(dataDir, 'roles')))
    throw new Error('data/roles not found')
  writeFileSync(out, `${JSON.stringify(buildMatrix())}\n`)
  console.log(`matrix: wrote ${out}`)
}
