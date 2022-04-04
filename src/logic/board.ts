import { ref } from 'vue'
import { showAnswer, markType } from '.'

export const board = ref<number[][]>([])
export const solution = ref<number[][]>([])
export const rows = ref(6)
export const cols = ref(6)

export const colCount = ref<number[][]>([])
export const rowCount = ref<number[][]>([])

const chance = 0.5

export const resetBoard = () => {
  board.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => 0)
  )
}

export const generateBoard = () => {
  showAnswer.value = false
  markType.value = 'check'

  resetBoard()

  solution.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < chance ? 1 : 0))
  )

  rowCount.value = getRowCount(solution.value)
  colCount.value = getColCount(solution.value)
}

export const getRowCount = (board: number[][]): number[][] => {
  const rows = board.length
  const cols = board[0].length
  const rowCount: number[][] = Array.from({ length: rows }, () => [])

  for (let r = 0; r < rows; ++r) {
    let continueOne = 0

    for (let c = 0; c < cols; ++c) {
      if (board[r][c] === 0) continue

      continueOne++

      if (c === cols - 1 || board[r][c + 1] === 0) {
        rowCount[r].push(continueOne)
        continueOne = 0
      }
    }
  }

  return rowCount
}

export const getColCount = (board: number[][]): number[][] => {
  const rows = board.length
  const cols = board[0].length
  const colCount: number[][] = Array.from({ length: cols }, () => [])

  for (let c = 0; c < cols; ++c) {
    let continueOne = 0

    for (let r = 0; r < rows; ++r) {
      if (board[r][c] === 0) continue

      continueOne++

      if (r === rows - 1 || board[r + 1][c] === 0) {
        colCount[c].push(continueOne)
        continueOne = 0
      }
    }
  }

  return colCount
}
