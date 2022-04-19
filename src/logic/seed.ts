import seedrandom from 'seedrandom'
import { cols, rows } from '.'

const SEED = 'nonogram'
const SHUFFLE_TIMES = 30 // HNOPSVWXZIdDMaYbAKQGCeBEfRTJFcUL

const getPseRandomNumber = seedrandom(SEED).int32 // pseudo random seed

export const ENCODE_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef'

export const shuffle = (times: number, str: string) => {
  let shuffled = str
  for (let i = 0; i < times; ++i) {
    const pseRdmIdx = Math.abs(getPseRandomNumber() % str.length)

    let lastShuffled = shuffled

    shuffled = ''.concat(
      ...lastShuffled.split(lastShuffled[pseRdmIdx]),
      lastShuffled[pseRdmIdx]
    )
  }

  return shuffled
}

const shuffledMap = shuffle(SHUFFLE_TIMES, ENCODE_MAP)

export const encodeSeed = (numbers: number[][]): string => {
  const splits = []

  const size = `${numbers.length}x${numbers[0].length}-`

  let nums = numbers.flat()

  const fillZeros = Array.from(
    { length: [0, 4, 3, 2, 1][nums.length % 5] },
    () => 0
  )

  nums = [...nums, ...fillZeros]

  for (let i = 0; i < nums.length; i += 5) {
    splits.push(fiveBitToDec(nums.slice(i, i + 5)))
  }

  return size + splits.map((idx) => shuffledMap[idx]).join('')
}

export const decodeSeed = (seed: string): number[][] | false => {
  if (!seed) return false

  const [size, seedStr] = seed.split('-')
  if (
    size === undefined ||
    size === '' ||
    seedStr === '' ||
    seedStr === undefined
  )
    return false

  const [r, c] = size.split('x')
  if (r === '' || r === undefined || c === '' || c === undefined) return false
  if (+r <= 1 || +c <= 1) return false

  const seedBit = seedStr
    .split('')
    .map((c) => shuffledMap.indexOf(c)!)
    .map(decToFiveBit)
    .flat()

  if (seedBit.some((v) => v === -1)) return false

  rows.value = +r
  cols.value = +c

  if (seedBit.length < rows.value * cols.value) return false

  const result = []

  for (let row = 0; row < rows.value; row++) {
    const rowBits = []
    for (let col = 0; col < cols.value; col++) {
      rowBits.push(seedBit[row * cols.value + col])
    }
    result.push(rowBits)
  }

  return result
}

const fiveBitToDec = (fiveBit: number[]) => {
  let base = 32
  const dec = [0, ...fiveBit].reduce((prev, curr) => {
    base /= 2
    return prev + curr * base
  })
  return dec
}

const decToFiveBit = (dec: number) => {
  if (dec === -1) return -1

  let base = 16
  const bits = []

  while (base >= 1) {
    if (dec >= base) {
      dec -= base
      bits.push(1)
    } else {
      bits.push(0)
    }

    base /= 2
  }

  return bits
}
