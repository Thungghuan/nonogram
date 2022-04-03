<script setup lang="ts">
import { ref } from 'vue'
import { rows } from '../logic'

const rowCount = ref([[1, 2, 3], [1, 2], [1, 2], [1, 2], [1]])
</script>

<template>
  <div flex="~ col">
    <div v-for="i in rows" flex m="0.5" h3vw items-center justify-end>
      <div v-for="v in rowCount[i - 1]" m="1.5">{{ v }}</div>
    </div>
  </div>
</template>
