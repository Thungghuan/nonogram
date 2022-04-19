import { describe, it, expect } from 'vitest'
import { encodeSeed, decodeSeed, ENCODE_MAP, shuffle } from '../src/logic/seed'
import seedrandom from 'seedrandom'

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

describe('pseudo random seed', () => {
  it('always the same', () => {
    const seed = 'nonogram'
    const rng = seedrandom(seed).int32

    expect(rng()).toBe(878448936)
    expect(rng()).toBe(-248000092)
    expect(rng()).toBe(63657219)
    expect(rng()).toBe(986913258)
    expect(rng()).toBe(-865143543)
    expect(rng()).toBe(841798965)
    expect(rng()).toBe(-1232052834)
  })
})
