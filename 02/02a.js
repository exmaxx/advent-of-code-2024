import { readFromFile } from '../utils.js'

const lines = readFromFile('02-input.txt')
// const lines = readFromFile('02-example.txt')

let count = 0

for (const line of lines) {
  const regex = /\d+/g
  const numbers = line.match(regex)

  if (numbers[0] === numbers[1]) {
    continue
  }

  const isIncreasing = numbers[0] - numbers[1] < 0

  let allOk = true

  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = Number(numbers[i]) - Number(numbers[i + 1])
    const isDiffOk = Math.abs(diff) >= 1 && Math.abs(diff) <= 3
    const isDirectionOk = isIncreasing ? diff < 0 : diff > 0

    if (!isDiffOk || !isDirectionOk) {
      allOk = false
      break
    }
  }

  if (allOk) {
    count++
  }
}

console.log('count:', count)
