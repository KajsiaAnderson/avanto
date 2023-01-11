import React from 'react'
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => {
  const primaryPhoto = car.photos.filter((img) => {
    return img.primaryPhoto === true
  })
  return (
    <div className='car-card'>
      <img src={primaryPhoto[0].url} alt='car' />
      <h4 className='card-model'>{car.model}</h4>
      <h4 className='card-make'>{car.make}</h4>
      <h3 className='card-price'>${car.price}</h3>
      <Link to={`/product/${car.id}`}>
        <button className='card-button'>Buy Now</button>
      </Link>
    </div>
  )
}

export default CarCard