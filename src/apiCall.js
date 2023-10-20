const url = 'https://api.weatherapi.com/v1/current.json'

const API_KEY = '8ffdc1eb60514063b4844549231910'

const getCurrentWeather = async (location) => {
  try {
    const res = await fetch(`${url}?key=${API_KEY}&q=${location}`)
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      console.info(processData(data))
      //todo: resolve promise
    } else {
      throw new Error('Response was not ok')
    }
  } catch (error) {
    //todo: reject promise
    console.error(error)
  }
}

const processData = (data) => ({
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

export default getCurrentWeather
