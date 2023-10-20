const Form = () => {
  const element = document.createElement('form')

  const search = document.createElement('input')
  search.type = 'search'
  search.name = 'location'
  search.placeholder = 'London'
  search.required = true

  element.appendChild(search)
  return element
}

export default Form
