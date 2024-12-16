import { it, expect } from 'vitest'
import { solve } from './01a.js'

const getFilePath = (fileName) => {
  return new URL(`./${fileName}`, import.meta.url).pathname
}

it('solves example', () => {
  // Arrange
  const filePath = getFilePath('./01-example.txt')

  // Act
  const solution = solve(filePath)

  // Assert
  expect(solution).toBe(11)
})

it('runs for full problem', () => {
  // Arrange
  const filePath = getFilePath('./01-input.txt')

  // Act
  const solution = solve(filePath)

  console.log('solution:', solution)

  // Assert
  expect(solution).not.toBeUndefined()
})
