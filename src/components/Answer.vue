<script setup lang="ts">
import { ref } from 'vue'
import { board, solution, validate } from '../logic'
import AnswerBoard from './AnswerBoard.vue'

const state = ref(validate(board.value, solution.value))
</script>

<template>
  <div max-w-88vw of-auto px6 py4 b-2 flex="~ col" items-center>
    <div text-2xl font-bold text-center>
      <p text-sky-400 v-if="state === 0">🥳 Your answer is correct!</p>
      <p text-blue-600 v-else-if="state === 1">
        🧐 You found another solution!
      </p>
      <p text-red-500 v-else="state === 2">😣 Your answer is incorrect.</p>
    </div>

    <div my2 flex="~ col" sm:flex="row" gap-5 justify-evenly>
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
