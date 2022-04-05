import { describe, it, expect } from 'vitest'
import {
  generateBoard,
  board,
  rows,
  cols,
  getColCount,
  getRowCount,
  validate
} from '../src/logic'

describe('board', () => {
  it('generate the game board', () => {
    generateBoard()

    expect(board.value).toHaveLength(rows.value)
    expect(board.value[0]).toHaveLength(cols.value)
  })

  it('get row count', () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1]
    ]

    expect(getRowCount(board)).toEqual([
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

  it('get row count with cross', () => {
    const solution = [
      [1, -1, 0, 0],
      [-1, 1, 1, -1],
      [1, -1, 0, 1],
      [1, 0, 1, 0]
    ]
    expect(getRowCount(solution)).toEqual([[1], [2], [1, 1], [1, 1]])
  })

  it('get column count', () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1]
    ]

    expect(getColCount(board)).toEqual([
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

  it('get column count with cross', () => {
    const solution = [
      [1, -1, 0, 0],
      [-1, 1, 1, -1],
      [1, -1, 0, 1],
      [1, 0, 1, 0]
    ]
    expect(getColCount(solution)).toEqual([[1, 2], [1], [1, 1], [1]])
  })

  it('validate', () => {
    const solution = [
      [0, 1, 1],
      [0, 0, 0],
      [1, 1, 0]
    ]

    const incorrectAnswer = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
    expect(validate(incorrectAnswer, solution)).toBe(2)

    const anotherSolution = [
      [1, 1, 0],
      [0, 0, 0],
      [0, 1, 1]
    ]
    expect(validate(anotherSolution, solution)).toBe(1)

    const anotherSolutionWithCross = [
      [1, 1, -1],
      [-1, -1, 0],
      [0, 1, 1]
    ]
    expect(validate(anotherSolutionWithCross, solution)).toBe(1)

    expect(validate(solution, solution)).toBe(0)

    const correctSolutionWithCross = [
      [0, 1, 1],
      [-1, -1, -1],
      [1, 1, 0]
    ]
    expect(validate(correctSolutionWithCross, solution)).toBe(0)
  })

  it('empty validate', () => {
    const solution = [
      [0, 1, 1],
      [0, 0, 0],
      [1, 1, 0]
    ]

    const emptyAnswer = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    expect(validate(emptyAnswer, solution)).toBe(2)
  })
})
