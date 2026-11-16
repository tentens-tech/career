// Pre-commit checks, mirrors CI (.github/workflows/deploy.yml) but only runs what the staged files need.
// Skip with `git commit --no-verify` (CI will still run everything).
import process from 'node:process'
import { execSync } from 'node:child_process'

function run(cmd) {
  console.log(`\n> ${cmd}`)
  execSync(cmd, { stdio: 'inherit' })
}

const staged = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)

// 1. Never commit generated / local-only files (even with `git add -f`)
const forbidden = /^(data\/matrix\.generated\.json|\.output\/|dist\/|\.nuxt\/|\.env(\..+)?$)/
const bad = staged.filter(f => forbidden.test(f))
if (bad.length) {
  console.error(`\nGenerated/local files must not be committed:\n  ${bad.join('\n  ')}`)
  process.exit(1)
}

const touches = re => staged.some(f => re.test(f))

try {
  // 2. Matrix data validation (fast)
  if (touches(/^data\/|^scripts\/(validate|build)-matrix\.mjs$/))
    run('pnpm validate')

  // 3. ESLint on staged files (auto-fixes and re-stages)
  if (touches(/\.(m?[jt]s|vue|json)$/))
    run('pnpm exec lint-staged')

  // 4. Typecheck the whole project (vue-tsc cannot check single files)
  if (touches(/\.(ts|vue)$|^data\/|^tsconfig\.json$|^nuxt\.config\.ts$/))
    run('pnpm typecheck')
}
catch {
  console.error('\nPre-commit checks failed. Fix the errors above (or use --no-verify to skip).')
  process.exit(1)
}
