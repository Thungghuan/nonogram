<script setup lang="ts">
import Board from './components/Board.vue'
import ColCount from './components/ColCount.vue'
import RowCount from './components/RowCount.vue'
</script>

<template>
  <div w100vw h100vh flex justify-center items-center font-mono>
    <div mxauto w60vw h80vh flex="~ col" items-center>
      <div my6 text-4xl font-bold uppercase>Nonogram</div>

      <div b-2>
        <div m2>
          <div flex="~ col">
            <ColCount />
            <div flex>
              <RowCount />
              <Board />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
