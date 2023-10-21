import 'normalize.css'
import './styles.css'
import Form from './components/form'
import Display from './components/display'
import Loader from './components/loader'
import Toggle from './components/toggle'
import { getCurrentWeather } from './apiCall'

const root = document.querySelector('#root')
let currentWeather = await getCurrentWeather('london')

const gradients = [
  `linear-gradient(to right, #8360c3, #2ebf91)`,
  `linear-gradient(to bottom, #ff4b1f, #1fddff)`,
  `linear-gradient(to right, #0099f7, #f11712)`,
  `linear-gradient(to right, #5614b0, #dbd65c)`,
  `linear-gradient(to right, #757f9a, #d7dde8)`,
  `linear-gradient(to right, #9796f0, #fbc7d4)`,
]
let currentGradient = 0

const handleSubmit = async (e) => {
  e.preventDefault()

  document.querySelector('.display').remove()
  root.appendChild(Loader())
  document.querySelector(`input[type='search']`).placeholder =
    'Search for location'

  // gradients
  currentGradient === gradients.length - 1
    ? (currentGradient = 0)
    : currentGradient++

  const query = e.target.elements.location.value.trim()
  currentWeather = await getCurrentWeather(query)

  document.querySelector('.loader').remove()

  root.appendChild(Display(currentWeather))

  document.querySelector('.display').style.background =
    gradients[currentGradient]
}

root.appendChild(Form())
root.appendChild(Toggle())
root.appendChild(Display(currentWeather))

document.querySelector('form').addEventListener('submit', handleSubmit)
