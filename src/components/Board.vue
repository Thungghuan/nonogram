<script setup lang="ts">
import { rows, cols } from '../logic'
import { board, generateBoard } from '../logic'

generateBoard()

const getBlockClass = (state: number) => {
  return state === 1 && 'bg-black'
}
</script>

<template>
  <div>
    <div v-for="(_, r) in rows" flex>
      <template v-for="(_, c) in cols">
        <div m="0.5" w3vw h3vw b :class="getBlockClass(board[r][c])"></div>
      </template>
    </div>
  </div>
</template>
