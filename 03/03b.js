import { readFromFile } from '../utils.js'

const lines = readFromFile('03-input.txt')
// const lines = readFromFile('03-example.txt')

let sum = 0

let enabled = true

for (const line of lines) {
  const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g
  const matches = line.matchAll(regex)

  for (const match of matches) {
    if (match[0] === 'do()') {
      enabled = true
      continue
    } else if (match[0] === "don't()") {
      enabled = false
      continue
    }

    if (enabled) {
      const [_, first, second] = match

      sum += first * second
    }
  }
}

console.log('sum:', sum)
