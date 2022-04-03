<script setup lang="ts">
import { board, getRowCount, rows } from '../logic'

const rowCount = getRowCount(board)
</script>

<template>
  <div flex="~ col" italic>
    <div v-for="(_, r) in rows" flex m="0.5" h3vw items-center justify-end>
      <div v-for="v in rowCount[r]" m="1.5">{{ v }}</div>
    </div>
  </div>
</template>
