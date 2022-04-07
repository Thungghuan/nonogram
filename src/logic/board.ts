import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { showAnswer, markType } from '.'

const chance = 0.5
export const defaultRow = 5
export const defaultCol = 5

export const rows = useStorage('rows', defaultRow)
export const cols = useStorage('cols', defaultCol)

export const board = useStorage(
  'board',
  Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => 0)
  )
)
export const solution = useStorage(
  'solution',
  Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < chance ? 1 : 0))
  )
)

// no need to storage
export const colCount = ref<number[][]>([])
export const rowCount = ref<number[][]>([])

export const resetBoard = () => {
  board.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => 0)
  )
}

export const resetSolution = () => {
  solution.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < chance ? 1 : 0))
  )
}

export const generateBoard = () => {
  showAnswer.value = false
  markType.value = 'check'

  if (cols.value < 2) cols.value = defaultCol
  if (rows.value < 2) rows.value = defaultRow

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
      if (board[r][c] === 0 || board[r][c] === -1) continue

      continueOne++

      if (c === cols - 1 || board[r][c + 1] === 0 || board[r][c + 1] === -1) {
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
      if (board[r][c] === 0 || board[r][c] === -1) continue

      continueOne++

      if (r === rows - 1 || board[r + 1][c] === 0 || board[r + 1][c] === -1) {
        colCount[c].push(continueOne)
        continueOne = 0
      }
    }
  }

  return colCount
}

type ValidateResult =
  | 0 // correct answer and equal to the solution
  | 1 // correct but not equal to the solution
  | 2 // incorrect answer

export const validate = (
  answer: number[][],
  solution: number[][]
): ValidateResult => {
  const answerRowCount = getRowCount(answer)
  const solutionRowCount = getRowCount(solution)

  for (let r = 0; r < solutionRowCount.length; ++r) {
    if (answerRowCount[r].length !== solutionRowCount[r].length)
      return 2

    for (let i = 0; i < solutionRowCount[r].length; ++i) {
      if (answerRowCount[r][i] !== solutionRowCount[r][i]) return 2
    }
  }

  const answerColCount = getColCount(answer)
  const solutionColCount = getColCount(solution)

  for (let c = 0; c < solutionColCount.length; ++c) {
    if (answerColCount[c].length !== solutionColCount[c].length)
      return 2

    for (let i = 0; i < solutionColCount[c].length; ++i) {
      if (answerColCount[c][i] !== solutionColCount[c][i]) return 2
    }
  }

  for (let r = 0; r < answer.length; ++r) {
    for (let c = 0; c < answer[r].length; ++c) {
      if (answer[r][c] === -1 && solution[r][c] === 0) continue
      if (answer[r][c] !== solution[r][c]) return 1
    }
  }

  return 0
}
