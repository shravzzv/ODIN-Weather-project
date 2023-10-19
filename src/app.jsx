import React from 'react'

// ! Warning: Don't use anything from React just yet. You haven't learned it as a part of TOP curriculum.
// todo: Use JSX to simplify creating DOM elements

import getCurrentWeather from './apiCall'
import Main from './main.jsx'
import Toggle from './toggle.jsx'

const App = () => {
  let isDataAvailable = true

  let data = {
    conditionText: 'Partly cloudy',
    country: 'United Kingdom',
    iconSrc: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    localTime: '2023-10-19 14:24',
    location: 'London',
    tempInC: 18,
    tempInF: 64.4,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.location.value.trim()
    if (query) {
      data = getCurrentWeather(query)
      isDataAvailable = true
    } else {
      console.error('Enter a proper location')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          name='location'
          id='location'
          placeholder='Enter a location'
        />
        <input type='submit' value='Search' />
      </form>
      {isDataAvailable ? (
        <Main data={data} />
      ) : (
        <p>You haven't searched for a location.</p>
      )}
      <Toggle />
    </>
  )
}

export default App
