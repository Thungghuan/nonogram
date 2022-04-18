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
