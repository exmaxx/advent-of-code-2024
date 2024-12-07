import { readFromFile } from '../utils.js'

function readLines(): string[] {
  return readFromFile('02-input.txt')
  // return readFromFile('02-example.txt')
}

function shortenReport(arr: number[], index: number): number[] {
  return arr.filter((_, i) => i !== index)
}

function isReportOk(numbers: number[]): boolean {
  if (numbers[0] === numbers[1]) {
    return false
  }

  const isIncreasing = numbers[1] > numbers[0]

  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i] - numbers[i + 1]
    const isDiffOk = Math.abs(diff) >= 1 && Math.abs(diff) <= 3
    const isDirectionOk = isIncreasing ? diff < 0 : diff > 0

    if (!isDiffOk || !isDirectionOk) {
      return false
    }
  }

  return true
}

function isAnyShorterReportOk(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    const shorterReport = shortenReport(numbers, i)

    if (isReportOk(shorterReport)) {
      return true
    }
  }

  return false
}

function main() {
  const lines = readLines()

  let count = 0

  for (const line of lines) {
    const regex = /\d+/g
    const numbers = (line.match(regex) || []).map(Number)

    if (isReportOk(numbers) || isAnyShorterReportOk(numbers)) {
      count++
    }
  }

  console.log('count:', count)
}

main()
