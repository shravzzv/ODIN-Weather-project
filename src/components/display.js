const Display = (weather) => {
  const element = document.createElement('main')
  element.className = 'display'

  if (weather === 'Failed to fetch') {
    const errorTitle = document.createElement('h2')
    errorTitle.textContent = 'No internet'

    element.appendChild(errorTitle)
    return element
  }

  if (weather === 'Response was not ok') {
    const errorTitle = document.createElement('h2')
    errorTitle.textContent = 'Perhaps your input was wrong'

    element.appendChild(errorTitle)
    return element
  }

  const condition = document.createElement('h2')
  condition.textContent = weather.conditionText

  const location = document.createElement('p')
  location.textContent = weather.location

  const country = document.createElement('p')
  country.textContent = weather.country

  const temperature = document.createElement('h1')
  temperature.textContent = `${weather.tempInC} °C`

  const feelsLike = document.createElement('p')
  feelsLike.textContent = `Feels like: ${weather.feelsLikeInC} °C`

  const wind = document.createElement('p')
  wind.textContent = `Wind: ${weather.windKph} kph`

  const humidity = document.createElement('p')
  humidity.textContent = `Humidity: ${weather.humidity} %`

  element.appendChild(condition)
  element.appendChild(location)
  element.appendChild(country)
  element.appendChild(temperature)
  element.appendChild(feelsLike)
  element.appendChild(wind)
  element.appendChild(humidity)
  return element
}

export default Display
