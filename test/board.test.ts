import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { generateBoard, board, rows, cols, getColCount } from '../src/logic'

describe('board', () => {
  it('generate the game board', () => {
    generateBoard()

    expect(board.value).toHaveLength(rows.value)
    expect(board.value[0]).toHaveLength(cols.value)
  })

  it('get column count', () => {
    const board = ref([
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1]
    ])

    expect(getColCount(board).value).toMatchInlineSnapshot(`
      [
        [
          0,
        ],
        [
          0,
        ],
        [
          0,
        ],
        [
          0,
        ],
        [
          0,
        ],
      ]
    `)
  })
})
