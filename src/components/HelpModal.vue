<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside, useStorage } from '@vueuse/core'
import { showHelpModal } from '../logic'

const helpModalRef = ref(null)
onClickOutside(helpModalRef, () => {
  showHelpModal.value = false
})

const getHelpModalClass = () => {
  if (showHelpModal.value) {
    return 'translate-y-0'
  } else {
    return '-translate-y-full'
  }
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

        <div my3 max-w-80vw w-60ch indent-md text-sm text-justify text-gray-800>
          <template v-if="locale === 'en'">
            <p>
              Nonograms, also known as Hanjie, Paint by Numbers, Picross,
              Griddlers, and Pic-a-Pix, and by various other names, are picture
              logic puzzles in which cells in a grid must be colored or left
              blank according to numbers at the side of the grid to reveal a
              hidden picture. In this puzzle type, the numbers are a form of
              discrete tomography that measures how many unbroken lines of
              filled-in squares there are in any given row or column.
            </p>
            <p>
              For example, a clue of "4 8 3" would mean there are sets of four,
              eight, and three filled squares, in that order, with at least one
              blank square between successive sets.
            </p>
            <p>
              -- from
              <a href="https://en.wikipedia.org/wiki/Nonogram">wikipedia</a>
            </p>
          </template>
          <template v-else-if="locale === 'zh-CN'">
            <div text-left text-lg indent-lg>
              <p>数织是一种逻辑游戏，以猜谜的方式绘画黑白位图。</p>
              <p>
                在一个网格中，每一行和列都有一组数，玩家需根据它们来填满或留空格子，最后就可以由此得出一幅图画。
              </p>
              <p>
                例如，“4 8 3”的意思就是指该行或列上有三段连续的方块，
                分别占了4、8和3格，而每条线最少要由一个空格分开。
              </p>
              <p>
                传统上，玩家是以黑色填满格子，和以“×”号标记一定不需要填充的格子。
              </p>
              <p text-right>
                -- 参考
                <a href="https://zh.wikipedia.org/wiki/%E6%95%B8%E7%B9%94">
                  维基百科
                </a>
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
