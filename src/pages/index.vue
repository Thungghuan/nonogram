<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useClipboard } from '@vueuse/core'
import {
  showAnswer,
  generateBoard,
  showSettingModal,
  showHelpModal,
  reset
} from '../logic'

const { copy, copied } = useClipboard()

const route = useRoute()
generateBoard(route.query.seed as string)

const share = () => copy(location.href)
</script>

<template>
  <div
    mxauto
    w90vw
    flex
    justify-center
    items-center
    font-mono
    @contextmenu="(e) => e.preventDefault()"
  >
    <div mxauto p2 flex="~ col" items-center>
      <SettingModal />
      <HelpModal />

      <div flex items-center>
        <span icon-btn @click="showHelpModal = true">
          <div text-2xl i-carbon-help />
        </span>
        <a
          icon-btn
          mx-2
          rel="noreferrer"
          href="https://github.com/Thungghuan/nonogram"
          target="_blank"
          title="GitHub - Thungghuan"
        >
          <div text-2xl i-carbon-logo-github />
        </a>
        <div my text-4xl font-bold uppercase>Nonogram</div>
        <span mx-2 icon-btn @click="showSettingModal = true">
          <div text-2xl i-carbon-settings />
        </span>
        <span icon-btn @click="share">
          <div text-2xl rotate-y-180 i-carbon-reply />
        </span>
      </div>

      <div flex items-center>
        <div btn bg-red-500 hover:bg-red-800 @click="reset($router)">
          {{ showAnswer ? 'Replay' : 'Reset' }}
        </div>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="reset($router, true)">New</div>
      </div>

      <div max-w-88vw of-auto b-2 my4 select-none>
        <div m2>
          <div flex>
            <RowCount />
            <div flex="~ col">
              <ColCount />
              <Board />
            </div>
          </div>
        </div>
      </div>

      <Answer v-if="showAnswer" />

      <div p4 absolute z-20 bg-emerald-100 rd-xl top="1/2" v-if="copied">
        😋 Share link copied!
      </div>
    </div>
  </div>
</template>
