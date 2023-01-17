import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux'

const ProductScreen = () => {
  const [car, setCar] = useState({})
  const [image, setImage] = useState("")
  const { id } = useParams()
  const reasonRef = useRef()
  const MySwal = withReactContent(Swal)
  const userId = useSelector(state => state.userId)

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

  const handlePurchase = () => {
    MySwal.fire({
      title: "You are about to send an Inquiry.",
      text: "You are sending an inquiry on a vehicle. This cannot be undone. Do you want to proceed?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Yes, let's continue"
    })
    .then((res) => {
      if(res.isConfirmed) {
        MySwal.fire({
          title: "Why should you be allowed this vehicle?",
          html: <input type='text' ref={reasonRef}/>,
        })
        .then((res) => {
          const bodyObj = {
            userId,
            reason: reasonRef.current.value,
            carId: id
          }
          axios.post('/api/createInquiry', bodyObj)
          .then((dbRes) => {
            console.log("success")
          })
          .catch(err => {
            console.error(err)
          })
        })
      } else {
        return
      }
    })
    .catch(() => {

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
      <div className='purchase-button-container'>
        <button onClick={handlePurchase}>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductScreen