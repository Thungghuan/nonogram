import { ref, Ref } from 'vue'

export const board = ref<number[][]>([])
export const rows = ref(10)
export const cols = ref(10)

const chance = 0.55

export const generateBoard = () => {
  board.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < chance ? 1 : 0))
  )
}

export const getRowCount = (board: Ref<number[][]>): Ref<number[][]> => {
  const rows = board.value.length
  const cols = board.value[0].length
  const rowCount: number[][] = Array.from({ length: rows }, () => [])

  for (let r = 0; r < rows; ++r) {
    let continueOne = 0

    for (let c = 0; c < cols; ++c) {
      if (board.value[r][c] === 0) continue

      continueOne++

      if (c === cols - 1 || board.value[r][c + 1] === 0) {
        rowCount[r].push(continueOne)
        continueOne = 0
      }
    }
  }

  return ref(rowCount)
}

export const getColCount = (board: Ref<number[][]>): Ref<number[][]> => {
  const rows = board.value.length
  const cols = board.value[0].length
  const colCount: number[][] = Array.from({ length: cols }, () => [])

  for (let c = 0; c < cols; ++c) {
    let continueOne = 0

    for (let r = 0; r < rows; ++r) {
      if (board.value[r][c] === 0) continue

      continueOne++

      if (r === rows - 1 || board.value[r + 1][c] === 0) {
        colCount[c].push(continueOne)
        continueOne = 0
      }
    }
  }

  return ref(colCount)
}