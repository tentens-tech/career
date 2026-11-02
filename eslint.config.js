import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: ['scripts/tilt.js', 'data/matrix.generated.json'],
  },
  unocss.configs.flat,
  {
    rules: {
      curly: 'off',
    },
  },
)
