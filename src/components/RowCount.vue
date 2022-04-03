<script setup lang="ts">
import { board, getRowCount, rows } from '../logic'

const rowCount = getRowCount(board)
</script>

<template>
  <div flex="~ col 1" italic>
    <div v-for="(_, r) in rows" m="0.8" flex items-center justify-end>
      <div v-for="v in rowCount[r]" m="0.5">{{ v }}</div>
    </div>
  </div>
</template>
