<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { onClickOutside, useStorage } from '@vueuse/core'

const props = defineProps<{
  show: boolean
}>()
const { show } = toRefs(props)

const emits = defineEmits(['toggle:show'])
const toggle = () => emits('toggle:show')

const helpModalRef = ref(null)
onClickOutside(helpModalRef, toggle)

const getHelpModalClass = () => {
  return show.value ? 'translate-y-0' : '-translate-y-full'
}

const locales = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '中文' }
]

const locale = useStorage('help-locale', 'en')
</script>

<template>
  <div
    wfull
    h100vh
    absolute
    z-5
    transition-all
    duration-300
    ease-in-out
    :class="getHelpModalClass()"
  >
    <div wfull shadow-gray-300 shadow-sm bg-white ref="helpModalRef">
      <CloseModal @click="toggle" />
      <div py8 flex="~ col" items-center>
        <div text-2xl uppercase>{{ locale === 'en' ? 'help' : '帮助' }}</div>

        <div my flex items-center>
          <div
            mx2
            underline
            cursor-pointer
            v-for="(l, idx) in locales"
            :key="idx"
            @click="locale = l.code"
            :class="{ 'text-sky-400': l.code === locale }"
          >
            {{ l.name }}
          </div>
        </div>

        <div my3 max-w-80vw w-60ch indent-md text-lg text-center text-gray-800>
          <template v-if="locale === 'en'">
            <p>Customize your own nonogram puzzle now!</p>
            <p>Paint your lattice, share it,</p>
            <p>and let your firends figure it out! :)</p>
          </template>
          <template v-else-if="locale === 'zh-CN'">
            <div>
              <p>定制属于你的数织谜题！</p>
              <p>点击方块创建你的点阵</p>
              <p>然后分享给你的朋友吧～</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
