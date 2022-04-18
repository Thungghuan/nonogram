import { cols, rows } from '.'

const ENCODE_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef'

export const encodeSeed = (numbers: number[][]): string => {
  const splits = []

  const size = `${numbers.length}x${numbers[0].length}-`

  let nums = numbers.flat()

  const fillZeros = Array.from({ length: 5 - (nums.length % 5) }, () => 0)

  nums = [...nums, ...fillZeros]

  for (let i = 0; i < nums.length; i += 5) {
    let base = 32
    const idx = [0, ...nums.slice(i, i + 5)].reduce((prev, curr) => {
      base /= 2
      return prev + curr * base
    })
    splits.push(idx)
  }

  return size + splits.map((idx) => ENCODE_MAP[idx]).join('')
}

export const decodeSeed = (seed: string): number[][] | false => {
  if (!seed) return false

  console.log(seed)

  const [size, seedStr] = seed.split('-')
  const [r, c] = size.split('x')

  rows.value = +r
  cols.value = +c

  return Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => (Math.random() < 0.5 ? 1 : 0))
  )
}
