<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  rows: number
  cols: number
  board: number[][]
}>()

const { rows, cols, board } = toRefs(props)

const getBlockClass = (state: number) => {
  return state ? 'bg-black' : 'bg-gray-400 opacity-30 sm:hover:opacity-90'
}

const markBlock = (row: number, column: number) => {
  board.value[row][column] = board.value[row][column] ? 0 : 1
}
</script>

<template>
  <div flex="~ col">
    <div v-for="(_, r) in rows" flex>
      <template v-for="(_, c) in cols">
        <div m="0.5" w8 h8 cursor-pointer :class="getBlockClass(board[r][c])">
          <div w8 h8 @click="markBlock(r, c)" />
        </div>
      </template>
    </div>
  </div>
</template>
