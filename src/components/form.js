const Form = () => {
  const element = document.createElement('form')

  const search = document.createElement('input')
  search.type = 'search'
  search.name = 'location'
  search.placeholder = 'London'

  const submit = document.createElement('input')
  submit.type = 'submit'
  submit.value = 'submit'
  submit.name = 'submit'

  element.appendChild(search)
  element.appendChild(submit)
  return element
}

export default Form
