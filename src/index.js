import 'normalize.css'
import './styles.css'
import Form from './components/form'
import Display from './components/display'
import { getCurrentWeather, getForecast } from './apiCall'

const root = document.querySelector('#root')
let currentWeather = await getCurrentWeather('london')
let forecast

const handleSubmit = async (e) => {
  e.preventDefault()
  const query = e.target.elements.location.value.trim()
  if (query) {
    currentWeather = await getCurrentWeather(query)
    forecast = await getForecast(query, 7)
    document.querySelector('.display').remove()
    root.appendChild(Display(currentWeather))
  } else {
    console.error('Enter a proper location')
  }
}

root.appendChild(Form())
root.appendChild(Display(currentWeather))

document.querySelector('form').addEventListener('submit', handleSubmit)
