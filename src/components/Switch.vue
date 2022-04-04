<script setup lang="ts">
import { markType, toggleMarkType } from '../logic'

const getSwitchClass = () => {
  return markType.value === 'cross' ? 'justify-end' : 'justify-start'
}
</script>

<template>
  <div my4 h8 flex="~ col" items-center>
    <div flex items-center>
      <div w4 h4 bg-black />
      <div
        mx3
        w10
        h5
        bg-gray-300
        rd-20
        flex
        items-center
        :class="getSwitchClass()"
        @click="toggleMarkType"
      >
        <div w6 h6 rd-6 b box-border bg-white />
      </div>
      <div w4 h4 b box-border flex justify-center items-center>
        <div text-red i-carbon-close />
      </div>
    </div>

    <div my1 items-center hidden sm:flex>
      <div i-ph-mouse-duotone rotate-y-180 />
      <div mx1 text-xs italic text-gray-600>Right click to toggle</div>
    </div>
  </div>
</template>
