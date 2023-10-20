const Display = (weather) => {
  const element = document.createElement('main')
  element.className = 'display'

  const condition = document.createElement('p')
  condition.textContent = weather.conditionText

  const location = document.createElement('p')
  location.textContent = weather.location

  const country = document.createElement('p')
  country.textContent = weather.country

  const temperature = document.createElement('p')
  temperature.textContent = `${weather.tempInC} °C`

  const feelsLike = document.createElement('p')
  feelsLike.textContent = `${weather.feelsLikeInC} °C`

  const wind = document.createElement('p')
  wind.textContent = `${weather.windKph} kph`

  const humidity = document.createElement('p')
  humidity.textContent = `${weather.humidity} %`

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
