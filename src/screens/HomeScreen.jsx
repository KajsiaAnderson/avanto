import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarCard from '../components/CarCard'

const HomeScreen = () => {
  const [cars, setCars] = useState([])

  const getData = () => {
    axios.get('/api/allCars')
      .then((res) => {
        console.log(res.data)
        setCars(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const carDisplay = cars.map((car, index) => {
    return <CarCard car={car} />
  })

  return (
    <div className='main-page'>
      <div className='banner' style={{
        width: '100vw',
        height: '100vw',
        background: `linear-gradient(190deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url(${ cars.length !== 0 && cars[0].photos[0].url}) center center`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <button className='card-button'>Buy Now</button>
      </div>
      <div className='car-container'>
        {carDisplay}
      </div>
    </div>
  )
}

export default HomeScreen