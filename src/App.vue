<script setup lang="ts">
import { showAnswer, generateBoard, pointerType, toggleMarkType } from './logic'
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'
import Answer from './components/Answer.vue'
import Switch from './components/Switch.vue'

generateBoard()

const onPointerEnter = (e: PointerEvent) => {
  pointerType.value = e.pointerType
}
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
    @pointerenter="onPointerEnter"
  >
    <div mxauto p2 flex="~ col" items-center>
      <div flex items-center>
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
      </div>

      <div flex>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="generateBoard">New Game</div>
      </div>

      <Switch />

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

<style>
#app {
  margin: 0 auto;
  max-width: 96vw;
  overflow: auto;
}
</style>
