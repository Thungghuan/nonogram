<script setup lang="ts">
import { showAnswer, generateBoard } from './logic'
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'
import Answer from './components/Answer.vue'

generateBoard()
</script>

<template>
  <div w100vw h100vh flex justify-center items-center font-mono>
    <div mxauto w60vw h80vh flex="~ col" items-center>
      <div my6 text-4xl font-bold uppercase>Nonogram</div>

      <div flex>
        <div btn @click="showAnswer = true">Submit</div>
        <div btn @click="generateBoard">New Game</div>
      </div>

      <div b-2 my4 select-none>
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
