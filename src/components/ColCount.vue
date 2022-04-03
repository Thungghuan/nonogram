<script setup lang="ts">
import { ref } from 'vue'
import { cols } from '../logic'

const colCount = ref([[1], [1, 2], [1, 2], [1, 2, 3], [1]])
</script>

<template>
  <div flex self-end>
    <div v-for="i in cols" flex="~ col" m="0.5" w3vw items-center justify-end>
      <div v-for="v in colCount[i - 1]">{{ v }}</div>
    </div>
  </div>
</template>
