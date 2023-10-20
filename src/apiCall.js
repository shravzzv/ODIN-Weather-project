const API_KEY = '8ffdc1eb60514063b4844549231910'

export const getCurrentWeather = async (location) => {
  const url = 'https://api.weatherapi.com/v1/current.json'
  try {
    const res = await fetch(`${url}?key=${API_KEY}&q=${location}&aqi=no`)
    if (res.ok) {
      const data = await res.json()
      return processCWData(data)
    } else {
      throw new Error('Response was not ok')
    }
  } catch (error) {
    console.error(error)
    return error.message
  }
}

export const getForecast = async (location, days) => {
  const url = 'https://api.weatherapi.com/v1/forecast.json'

  try {
    const res = await fetch(
      `${url}?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`
    )
    if (res.ok) {
      const data = await res.json()
      return processForecastData(data)
    } else {
      throw new Error('Response was not ok')
    }
  } catch (error) {
    console.error(error)
    return error.message
  }
}

const processCWData = (data) => ({
  location: data.location.name,
  country: data.location.country,
  localTime: data.location.localtime,
  iconSrc: data.current.condition.icon,
  tempInC: data.current.temp_c,
  tempInF: data.current.temp_f,
  conditionText: data.current.condition.text,
  feelsLikeInC: data.current.feelslike_c,
  feelsLikeInF: data.current.feelslike_f,
  windKph: data.current.wind_kph,
  windMph: data.current.wind_mph,
  windDir: data.current.wind_dir,
  humidity: data.current.humidity,
  uvIndex: data.current.uv,
  visibilityKm: data.current.vis_km,
  visibilityMile: data.current.vis_miles,
  cloudiness: data.current.cloud,
})

const processForecastData = (data) =>
  data.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTempInC: day.day.maxtemp_c,
    maxTempInF: day.day.maxtemp_f,
    minTempInC: day.day.mintemp_c,
    minTempInF: day.day.mintemp_f,
  }))
