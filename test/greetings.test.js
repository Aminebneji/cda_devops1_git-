const { greet, bye } = require('../service/greetings')

test('greet function should return a greeting message', () => {
  const name = 'John'
  const result = greet(name)
  expect(result).toBe('Hello, John!')
})

test('bye function should return a farewell message', () => {
  const name = 'John'
  const result = bye(name)
  expect(result).toBe('Goodbye, John!')
})
