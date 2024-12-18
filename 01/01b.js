import { readFromFile } from '../utils.js'

export function solve (filePath) {
  const lines = readFromFile(filePath)

  let sum = 0
  const firsts = []
  const seconds = []

  for (const line of lines) {
    const regex = /\d+/g
    const [first, second] = line.match(regex)

    firsts.push(Number(first))
    seconds.push(Number(second))
  }

  // const firstCounts = {}
  const secondCounts = {}

  for (let i = 0; i < lines.length; i++) {
    const numberToCheck = seconds[i]
    secondCounts[numberToCheck] = secondCounts[numberToCheck]
      ? secondCounts[numberToCheck] + 1
      : 1
  }

  for (let i = 0; i < lines.length; i++) {
    const numberToCheck = firsts[i]
    const count = secondCounts[numberToCheck] || 0

    sum += numberToCheck * count
  }

  return sum
}
