const ErrorDisplay = () => {
  const element = document.createElement('div')

  const text = document.createElement('p')
  text.textContent = 'Something went wrong, check the input again!'

  element.appendChild(text)
  return element
}

export default ErrorDisplay
