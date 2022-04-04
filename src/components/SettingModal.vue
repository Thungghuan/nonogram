<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { showSettingModal, rows, cols, generateBoard } from '../logic'
import Counter from './Counter.vue'

const settingModalRef = ref(null)

const isLinked = ref(true)
const getLinkClass = () => {
  if (isLinked.value) {
    return 'b-2 opacity-100'
  } else {
    return 'opacity-20'
  }
}

const rowSet = ref(rows.value)
const colSet = ref(cols.value)

onClickOutside(settingModalRef, () => {
  showSettingModal.value = false
})

const generateNew = () => {
  rows.value = rowSet.value
  cols.value = colSet.value

  generateBoard()
  showSettingModal.value = false
}
</script>

<template>
  <div wfull h100vh absolute z-5 v-if="showSettingModal">
    <div wfull shadow-gray-300 shadow-2xl bg-white ref="settingModalRef">
      <div py8 flex="~ col" items-center>
        <div text-sm>Set the width and height</div>
        <div m5 grid="~ cols-2 rows-3">
          <div py2 text-center>width:</div>

          <Counter
            v-model:value="colSet"
            @update:value="(v) => isLinked && (rowSet = v)"
          />

          <div grid-row="[1,2]" flex justify-center items-center>
            <div
              p1
              cursor-pointer
              :class="getLinkClass()"
              @click="isLinked = !isLinked"
            >
              <div rotate-90 text-2xl i-ph:link-simple-horizontal-duotone />
            </div>
          </div>

          <div />

          <div py2 text-center>heigth:</div>

          <Counter
            v-model:value="rowSet"
            @update:value="(v) => isLinked && (colSet = v)"
          />
        </div>

        <div btn @click="generateNew">Generate new game</div>
      </div>
    </div>
  </div>
</template>
