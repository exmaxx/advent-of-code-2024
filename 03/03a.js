import { readFromFile } from '../utils.js'

const lines = readFromFile('03-input.txt')
// const lines = readFromFile('03-example.txt')

let sum = 0

for (const line of lines) {
  const regex = /mul\((\d+),(\d+)\)/g
  const matches = line.matchAll(regex)

  for (const [_, first, second] of matches) {
    sum += first * second
  }
}

console.log('sum:', sum)
