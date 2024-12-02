import { readFromFile } from '../utils.js'

const lines = readFromFile('01-input.txt')
// const lines = readFromFile('01-example.txt')

let sum = 0
const firsts = []
const seconds = []

for (const line of lines) {
  const regex = /\d+/g
  const [first, second] = line.match(regex)

  firsts.push(Number(first))
  seconds.push(Number(second))
}

firsts.sort()
seconds.sort()

for (let i = 0; i < lines.length; i++) {
  sum += Math.abs(Number(firsts[i]) - Number(seconds[i]))
}

console.log('sum:', sum)
