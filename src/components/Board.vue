<script setup lang="ts">
import { rows, cols } from '../logic'
</script>

<template>
  <div>
    <div v-for="i in rows" flex>
      <template v-for="j in cols">
        <div m="0.5" w3vw h3vw b></div>
      </template>
    </div>
  </div>
</template>
