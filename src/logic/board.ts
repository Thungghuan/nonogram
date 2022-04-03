import { ref, Ref } from 'vue'

export const board = ref<number[][]>([])
export const rows = ref(5)
export const cols = ref(5)

const chance = 0.55

export const generateBoard = () => {
  board.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < chance ? 1 : 0))
  )
}

export const getColCount = (board: Ref<number[][]>): Ref<number[][]> => {
  const colCount: number[][] = Array.from({ length: cols.value }, () => [0])

  return ref(colCount)
}

export const getRowCount = (board: Ref<number[][]>): Ref<number[][]> => {
  const rowCount: number[][] = Array.from({ length: rows.value }, () => [0])

  return ref(rowCount)
}
