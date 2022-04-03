<script setup lang="ts">
import { board, cols, getColCount } from '../logic'

const colCount = getColCount(board)
</script>

<template>
  <div flex self-end italic>
    <div
      v-for="(_, c) in cols"
      flex="~ col"
      m="0.8"
      w3vw
      items-center
      justify-end
    >
      <div v-for="v in colCount[c]">{{ v }}</div>
    </div>
  </div>
</template>
