<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{
  value: number
}>()
const emits = defineEmits(['update:value'])

const value = toRef(props, 'value')

const dec = () => {
  emits('update:value', value.value - 1)
}

const inc = () => {
  emits('update:value', value.value + 1)
}
</script>

<template>
  <div flex items-center select-none>
    <div p2 cursor-pointer b b-gray-300 rd-tl-2 rd-bl-2 @click="dec">-</div>
    <div p2 b="1 t-gray-300 b-gray-300 l-0 r-0">{{ value }}</div>
    <div p2 cursor-pointer b b-gray-300 rd-tr-2 rd-br-2 @click="inc">+</div>
  </div>
</template>
