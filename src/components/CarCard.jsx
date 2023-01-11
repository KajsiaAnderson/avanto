import React from 'react'

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
      <button className='card-button'>Buy Now</button>
    </div>
  )
}

export default CarCard