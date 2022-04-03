import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import {
  generateBoard,
  board,
  rows,
  cols,
  getColCount,
  getRowCount
} from '../src/logic'

describe('board', () => {
  it('generate the game board', () => {
    generateBoard()

    expect(board.value).toHaveLength(rows.value)
    expect(board.value[0]).toHaveLength(cols.value)
  })

  it('get row count', () => {
    const board = ref([
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1]
    ])

    expect(getRowCount(board).value).toEqual([
      [2],
      [3, 1],
      [1, 2, 2],
      [3, 3],
      [1, 1, 2],
      [2, 3],
      [3, 1],
      [2, 1, 1]
    ])
  })

  it('get column count', () => {
    const board = ref([
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1]
    ])

    expect(getColCount(board).value).toEqual([
      [1, 5],
      [3, 3],
      [1, 2, 1],
      [1],
      [1, 1, 2],
      [3],
      [1, 2, 1],
      [4, 1, 1]
    ])
  })
})
