const url = 'http://api.weatherapi.com/v1/current.json'

const API_KEY = '8ffdc1eb60514063b4844549231910'

const getCurrentWeather = async (location) => {
  const res = await fetch(`${url}?key=${API_KEY}&q=${location}`)
  if (res.ok) {
    const data = await res.json()
    console.info(processData(data))
    //todo: resolve promise
  } else {
    console.error('response was not okay!')
    //todo: reject promise
  }
}

const processData = (data) => ({
  location: data.location.name,
  localTime: data.location.localtime,
  country: data.location.country,
  tempInC: data.current.temp_c,
  tempInF: data.current.temp_f,
  conditionText: data.current.condition.text,
  iconSrc: data.current.condition.icon,
})

export default getCurrentWeather
