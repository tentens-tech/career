import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'text-title': 'text-56px font-bold line-height-110% text-white font-manrope',
    'text-breadcrumbs': 'text-16px line-height-110% text-#C8C8C8 font-manrope',
    'text-header-1': 'text-24px line-height-29px text-#C8C8C8 font-500 b-l-2px b-l-solid b-l-#00F3BC p-l-20px',
    'text-content-1': 'text-36px font-400 line-height-120% text-white',
    'text-content-2': 'text-24px font-400 line-height-120% text-#C8C8C8',
    'text-content-3': 'text-24px font-400 line-height-120% text-white',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        manrope: 'Manrope',
        gilroy: 'Gilroy',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
