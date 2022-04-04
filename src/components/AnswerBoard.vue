<script setup lang="ts">
import { defineProps, Ref } from 'vue'
import { rows, cols } from '../logic'

const props = defineProps<{
  board: number[][]
}>()

const { board } = props

const getBlockClass = (state: number) => {
  return state === 1 && 'bg-black'
}
</script>

<template>
  <div flex="~ col">
    <div v-for="(_, r) in rows" flex>
      <template v-for="(_, c) in cols">
        <div m="0.25" w8 h8 b :class="getBlockClass(board[r][c])" />
      </template>
    </div>
  </div>
</template>
