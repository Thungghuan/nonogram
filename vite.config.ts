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
        btn: 'm2 max-w-18vw h-2/3 py2 px4 flex justify-center items-center rd-lg cursor-pointer select-none inline-block bg-teal-600 text-sm text-white text-center hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        'icon-btn':
          'text-[0.9em] inline-block cursor-pointer select-none text-gray-500 opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-black'
      }
    })
  ]
})
