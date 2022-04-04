<script setup lang="ts">
import { showAnswer, generateBoard, toggleMarkType } from './logic'
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'
import Answer from './components/Answer.vue'
import Switch from './components/Switch.vue'

generateBoard()
</script>

<template>
  <div
    w80vw
    flex
    justify-center
    items-center
    font-mono
    @contextmenu.prevent="toggleMarkType"
  >
    <div mxauto p2 flex="~ col" items-center>
      <div my text-4xl font-bold uppercase>Nonogram</div>

      <div flex>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="generateBoard">New Game</div>
      </div>

      <Switch />

      <div max-w-70vw of-auto b-2 my4 select-none>
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
  max-width: 80vw;
  overflow: auto;
}
</style>
