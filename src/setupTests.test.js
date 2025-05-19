import '@testing-library/jest-dom'

test('jest-dom matchers are available', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  // comprobamos que el div creado está en el document
  expect(div).toBeInTheDocument()
})