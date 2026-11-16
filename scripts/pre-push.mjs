// Pre-push: full static build, mirrors the "Generate" + "Check generated output" CI steps.
import process from 'node:process'
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'

try {
  execSync('pnpm generate', { stdio: 'inherit' })
}
catch {
  console.error('\npnpm generate failed (use --no-verify to skip).')
  process.exit(1)
}

const missing = ['index.html', '404.html', 'CNAME'].filter(f => !existsSync(`.output/public/${f}`))
if (missing.length) {
  console.error(`\nMissing in .output/public: ${missing.join(', ')}`)
  process.exit(1)
}
