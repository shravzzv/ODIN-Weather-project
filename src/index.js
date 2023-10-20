import 'normalize.css'
import { getCurrentWeather, getForecast } from './apiCall'

getCurrentWeather('london')
getForecast('london', 7)

const root = document.querySelector('#root')
