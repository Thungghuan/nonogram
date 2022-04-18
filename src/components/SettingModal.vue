<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { showSettingModal, rows, cols, reset } from '../logic'

const router = useRouter()

const settingModalRef = ref(null)
onClickOutside(settingModalRef, () => {
  showSettingModal.value = false
})

const getSettingModalClass = () => {
  if (showSettingModal.value) {
    return 'translate-y-0'
  } else {
    return '-translate-y-full'
  }
}

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

const generateNew = () => {
  rows.value = rowSet.value
  cols.value = colSet.value

  reset(router, true)
  showSettingModal.value = false
}
</script>

<template>
  <div
    wfull
    h100vh
    absolute
    z-5
    transition-all
    duration-300
    ease-in-out
    :class="getSettingModalClass()"
  >
    <div wfull shadow-gray-300 shadow-2xl bg-white ref="settingModalRef">
      <CloseModal @click="showSettingModal = false" />
      <div py8 flex="~ col" items-center>
        <div text-sm>Set the width and height</div>
        <div m5 grid="~ cols-2 rows-3">
          <div py2 text-center>width:</div>

          <Counter
            v-model:value="colSet"
            @update:value="(v: number) => isLinked && (rowSet = v)"
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
            @update:value="(v: number) => isLinked && (colSet = v)"
          />
        </div>

        <div btn @click="generateNew">Generate new game</div>
      </div>
    </div>
  </div>
</template>
