import { cols, rows } from '.'

const ENCODE_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef'

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

  return size + splits.map((idx) => ENCODE_MAP[idx]).join('')
}

export const decodeSeed = (seed: string): number[][] | false => {
  if (!seed) return false

  console.log(seed)

  const [size, seedStr] = seed.split('-')
  const [r, c] = size.split('x')

  const seedBit = seedStr
    .split('')
    .map((c) => ENCODE_MAP.indexOf(c)!)
    .map(decToFiveBit)
    .flat()

  rows.value = +r
  cols.value = +c

  const result = []

  for (let row = 0; row < rows.value; row++) {
    const rowBits = []
    for (let col = 0; col < cols.value; col++) {
      rowBits.push(seedBit[row * cols.value + col])
    }
    result.push(rowBits)
  }

  console.log(result)

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
