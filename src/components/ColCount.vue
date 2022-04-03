<script setup lang="ts">
import { colCount, cols } from '../logic'
</script>

<template>
  <div px="0.5" flex self-end italic>
    <div
      v-for="(_, c) in cols"
      flex="~ col"
      m="0.5"
      w8
      items-center
      justify-end
    >
      <div v-for="v in colCount[c]">{{ v }}</div>
    </div>
  </div>
</template>
