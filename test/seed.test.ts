import { describe, it, expect } from 'vitest'
import { encodeSeed, decodeSeed } from '../src/logic/seed'

describe('seed', () => {
  it('decode from encode', () => {
    const seed1 = '5x5-NPZPJ'
    expect(encodeSeed(decodeSeed(seed1) as number[][])).toBe(seed1)

    const seed2 = '7x7-aMGBYcdBQK'
    expect(encodeSeed(decodeSeed(seed2) as number[][])).toBe(seed2)
  })
})

describe('invalid seed', () => {
  it('no size', () => {
    expect(decodeSeed('ABDCDS')).toBeFalsy()
    expect(decodeSeed('-ABDCDS')).toBeFalsy()
    expect(decodeSeed('1x3AbdD')).toBeFalsy()
  })

  it('invalid size', () => {
    expect(decodeSeed('1x-AbdD')).toBeFalsy()
    expect(decodeSeed('x3-AbdD')).toBeFalsy()
  })

  it('too small size', () => {
    expect(decodeSeed('1x3-AbdD')).toBeFalsy()
    expect(decodeSeed('3x1-AbdD')).toBeFalsy()
    expect(decodeSeed('3x3-AbdD')).toBeTruthy()
  })

  it('invalid seed', () => {
    expect(decodeSeed('8x8-ABDD')).toBeFalsy()
  })

  it('invalid seed char', () => {
    expect(decodeSeed('3x3-ABDDefg')).toBeFalsy()
  })
})
