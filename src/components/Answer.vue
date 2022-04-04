<script setup lang="ts">
import { board, solution } from '../logic'
import AnswerBoard from './AnswerBoard.vue'
</script>

<template>
  <div px6 py4 b-2 flex="~ col" items-center>
    <div text-2xl font-bold>Answer:</div>

    <div my2 flex gap-5 justify-evenly>
      <div>
        <div m2>Your Answer:</div>
        <AnswerBoard :board="board" />
      </div>

      <div>
        <div m2>Solution:</div>
        <AnswerBoard :board="solution" />
      </div>
    </div>
  </div>
</template>
