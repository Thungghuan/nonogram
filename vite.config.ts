import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      shortcuts: {
        btn: 'm2 py2 px4 b bg-green-300 rd-lg cursor-pointer select-none'
      }
    })
  ]
})
