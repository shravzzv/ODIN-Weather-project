import React from 'react'

const Main = (data) => {
  const {
    location,
    localTime,
    country,
    tempInC,
    tempInF,
    conditionText,
    iconSrc,
  } = data.data

  return (
    <main>
      <h1>{conditionText}</h1>
      <img src={iconSrc} alt={conditionText} className='icon' />
      <h2>
        {location}, {country}
      </h2>
      <small>{localTime}</small>
      <p className='temp'>{tempInC} °C</p>
      {/* <p>{tempInF} °F</p> */}
    </main>
  )
}

export default Main
