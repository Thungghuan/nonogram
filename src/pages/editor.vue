<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useClipboard } from '@vueuse/core'
import { rows, cols, encodeSeed } from '../logic'

const showEditorHelp = ref(false)

const { copy, copied } = useClipboard()
const share = () => {
  const seed = encodeSeed(board.value!)
  copy(`${location.host}/?seed=${seed}`)
}

const rowSet = ref(rows.value)
const colSet = ref(cols.value)

const resetBoard = () =>
  Array.from({ length: rowSet.value }, () =>
    Array.from({ length: colSet.value }, () => 0)
  )
const board = ref<number[][]>()
watchEffect(() => {
  board.value = resetBoard()
})

const isLinked = ref(true)
const getLinkClass = () => {
  return isLinked.value ? 'b-black opacity-100' : 'b-transparent opacity-20'
}
</script>

<template>
  <div
    mxauto
    w90vw
    flex
    justify-center
    items-center
    font-mono
    @contextmenu="(e) => e.preventDefault()"
  >
    <div mxauto p2 flex="~ col" items-center>
      <EditorHelp
        :show="showEditorHelp"
        @toggle:show="showEditorHelp = false"
      />

      <div flex items-center>
        <span icon-btn @click="$router.replace('/')">
          <div text-2xl i-carbon-home />
        </span>
        <span mx-2 icon-btn @click="showEditorHelp = true">
          <div text-2xl i-carbon-help />
        </span>
        <div my text-2xl font-bold uppercase>Nonogram - editor</div>
        <a
          icon-btn
          mx-2
          rel="noreferrer"
          href="https://github.com/Thungghuan/nonogram"
          target="_blank"
          title="GitHub - Thungghuan"
        >
          <div text-2xl i-carbon-logo-github />
        </a>
      </div>

      <div m5 flex>
        <div mx4>
          <div py2 text-center>width:</div>
          <Counter
            v-model:value="colSet"
            @update:value="(v: number) => isLinked && (rowSet = v)"
          />
        </div>

        <div mx2 grid-row="[1,2]" flex justify-center items-center>
          <div
            p1
            cursor-pointer
            b-2
            :class="getLinkClass()"
            @click="isLinked = !isLinked"
          >
            <div text-2xl i-ph:link-simple-horizontal-duotone />
          </div>
        </div>

        <div mx4>
          <div py2 text-center>heigth:</div>
          <Counter
            v-model:value="rowSet"
            @update:value="(v: number) => isLinked && (colSet = v)"
          />
        </div>
      </div>

      <div max-w-88vw of-auto b-2 my4 select-none>
        <div m2>
          <div flex>
            <div flex="~ col">
              <EditorBoard :rows="rowSet" :cols="colSet" :board="board" />
            </div>
          </div>
        </div>
      </div>

      <div flex items-center>
        <div btn bg-red-500 hover:bg-red-800 @click="board = resetBoard()">
          Reset
        </div>
        <div btn @click="share">Share</div>
      </div>

      <div p4 absolute z-20 bg-emerald-100 rd-xl top="1/2" v-if="copied">
        😋 Share link copied!
      </div>
    </div>
  </div>
</template>
