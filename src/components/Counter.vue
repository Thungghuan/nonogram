<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{
  value: number
}>()
const emits = defineEmits(['update:value'])

const value = toRef(props, 'value')

const dec = () => {
  emits('update:value', value.value <= 2 ? 2 : value.value - 1)
}
const decClass = () => {
  if (value.value <= 2) {
    return 'text-gray-200 cursor-not-allowed'
  } else {
    return 'text-black cursor-pointer'
  }
}

const inc = () => {
  emits('update:value', value.value + 1)
}
</script>

<template>
  <div flex items-center select-none>
    <div p2 b b-gray-300 rd-tl-2 rd-bl-2 :class="decClass()" @click="dec">
      -
    </div>
    <div p2 b="1 t-gray-300 b-gray-300 l-0 r-0">{{ value }}</div>
    <div p2 cursor-pointer b b-gray-300 rd-tr-2 rd-br-2 @click="inc">+</div>
  </div>
</template>
