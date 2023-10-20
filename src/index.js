import 'normalize.css'
import './styles.css'
import { getCurrentWeather, getForecast } from './apiCall'

import Form from './components/form'

getForecast('london', 7)

const root = document.querySelector('#root')

root.appendChild(Form())

let currentWeather
let forecast

const handleSubmit = async (e) => {
  e.preventDefault()
  const query = e.target.elements.location.value.trim()
  if (query) {
    currentWeather = await getCurrentWeather(query)
    forecast = await getForecast(query, 7)
  } else {
    console.error('Enter a proper location')
  }
  console.log(currentWeather)
  console.log(forecast)
}

document.querySelector('form').addEventListener('submit', handleSubmit)
