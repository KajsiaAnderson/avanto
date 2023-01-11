import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductScreen = () => {
  const [car, setCar] = useState({})
  const [image, setImage] = useState("")
  const { id } = useParams()

  const getData = () => {
    axios.get(`/api/car/${id}`)
      .then(res => {
        console.log(res.data)
        setCar(res.data)
        let primaryPhoto = res.data.photos.filter((img) => {
          return img.primaryPhoto === true
        })
        setImage(primaryPhoto[0].url)
      })
      .catch(err => {
        console.log('error getting car', err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='main-page'>
      <img src={image} className='product-image' alt='car' />
      <div className='product-details'>
        <div>
          <h4 className='card-model'>{car.model}</h4>
          <h4 className='card-make'>{car.make}</h4>
        </div>
        <h3 className='card-price'>${car.price}</h3>
      </div>
      <div className='description-container'>
        <p className='car-description'>
          {car.description}
        </p>
      </div>
    </div>
  )
}

export default ProductScreen