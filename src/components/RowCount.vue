<script setup lang="ts">
import { rowCount, rows } from '../logic'
</script>

<template>
  <div py="0.5" flex="~ col 1" self-end italic>
    <div v-for="(_, r) in rows" m="0.5" h8 flex items-center justify-end>
      <div v-for="v in rowCount[r]" mx="0.8">{{ v }}</div>
    </div>
  </div>
</template>
