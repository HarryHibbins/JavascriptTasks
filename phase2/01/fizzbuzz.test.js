const fizzBuzz = require('./fizz_buzz')

describe('fizzBuzz', () => {
  it ('returns Fizz if number is divisiable by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
  })

  it ('returns Buzz if number is divisiable by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(20)).toBe('Buzz')
  })

  it ('returns FizzBuzz if number is divisiable by both', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })

  it ('returns the number if not divisable by 3 or 5' , () => {
    expect(fizzBuzz(4)).toBe(4)
  })
})