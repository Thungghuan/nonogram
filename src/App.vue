<script setup lang="ts">
import { generateBoard } from './logic'
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'

generateBoard()
</script>

<template>
  <div w100vw h100vh flex justify-center items-center font-mono>
    <div mxauto w60vw h80vh flex="~ col" items-center>
      <div my6 text-4xl font-bold uppercase>Nonogram</div>

      <div b-2 my4>
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

      <button @click="generateBoard">Generate</button>
    </div>
  </div>
</template>
