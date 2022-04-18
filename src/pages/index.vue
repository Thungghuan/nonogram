<script setup lang="ts">
import {
  showAnswer,
  generateBoard,
  showSettingModal,
  showHelpModal,
  resetBoard,
  resetSolution
} from '../logic'

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
    @contextmenu="
      (e) => {
        e.preventDefault()
      }
    "
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

      <div flex items-center>
        <div btn bg-red-500 hover:bg-red-800 @click="reset">
          {{ showAnswer ? 'Replay' : 'Reset' }}
        </div>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="newGame">New</div>
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
    </div>
  </div>
</template>
