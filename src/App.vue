<script setup lang="ts">
import {
  showAnswer,
  generateBoard,
  toggleMarkType,
  showSettingModal,
  showHelpModal,
  resetBoard,
  resetSolution
} from './logic'
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'
import Answer from './components/Answer.vue'
import Switch from './components/Switch.vue'
import SettingModal from './components/SettingModal.vue'
import HelpModal from './components/HelpModal.vue'

const reset = () => {
  resetBoard()
  generateBoard()
}

const newGame = () => {
  resetBoard()
  resetSolution()
  generateBoard()
}

generateBoard()
</script>

<template>
  <div
    mxauto
    w90vw
    flex
    justify-center
    items-center
    font-mono
    @contextmenu.prevent="toggleMarkType"
  >
    <div mxauto p2 flex="~ col" items-center>
      <SettingModal />
      <HelpModal />

      <div flex items-center>
        <span mx-2 icon-btn @click="showHelpModal = true">
          <div text-2xl i-carbon-help />
        </span>
        <div my text-4xl font-bold uppercase>Nonogram</div>
        <a
          icon-btn
          rel="noreferrer"
          href="https://github.com/Thungghuan/nonogram"
          target="_blank"
          title="GitHub - Thungghuan"
        >
          <div mx-2 text-2xl i-carbon-logo-github></div>
        </a>
        <span icon-btn @click="showSettingModal = true">
          <div text-2xl i-carbon-settings />
        </span>
      </div>

      <div flex>
        <div btn bg-red-500 hover:bg-red-800 @click="reset">
          {{ showAnswer ? 'Replay this game' : 'Reset' }}
        </div>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="newGame">New Game</div>
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

      <Switch />

      <Answer v-if="showAnswer" />
    </div>
  </div>
</template>

<style>
#app {
  margin: 0 auto;
  max-width: 96vw;
  overflow: auto;
}
</style>
