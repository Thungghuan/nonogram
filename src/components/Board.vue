<script setup lang="ts">
import { board, rows, cols, showAnswer, markType } from '../logic'

const getBlockClass = (state: number) => {
  if (state === 0) {
    return 'bg-gray-400 opacity-30 hover:opacity-90'
  } else if (state === 1) {
    return 'bg-black'
  } else if (state === -1) {
    return 'text-red i-carbon-close opacity-100'
  }
}

const markBlock = (row: number, column: number) => {
  if (markType.value === 'check') {
    board.value[row][column] = board.value[row][column] === 1 ? 0 : 1
  } else if (markType.value === 'cross') {
    board.value[row][column] = board.value[row][column] === -1 ? 0 : -1
  }
}
</script>

<template>
  <div flex="~ col">
    <div v-for="(_, r) in rows" flex>
      <template v-for="(_, c) in cols">
        <div m="0.5" w8 h8 cursor-pointer :class="getBlockClass(board[r][c])">
          <div w8 h8 @click="!showAnswer && markBlock(r, c)" />
        </div>
      </template>
    </div>
  </div>
</template>
