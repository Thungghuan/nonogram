<script setup lang="ts">
import { board, rows, cols } from '../logic'

const getBlockClass = (state: number) => {
  return state === 1 && 'bg-black'
}
</script>

<template>
  <div flex="~ col">
    <div v-for="(_, r) in rows" flex>
      <template v-for="(_, c) in cols">
        <div m="0.25" w8 h8 b :class="getBlockClass(board[r][c])"></div>
      </template>
    </div>
  </div>
</template>
