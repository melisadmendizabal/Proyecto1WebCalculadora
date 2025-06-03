test('jest-dom matchers are available', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  expect(div).toBeInTheDocument()
})
