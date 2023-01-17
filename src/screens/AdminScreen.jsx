import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-accessible-accordion'
import InquiryCard from '../components/InquiryCard'
import axios from 'axios'

const AdminScreen = () => {
  const [inquiries, setInquiries] = useState([])

  const getInquiries = () => {
    axios
      .get('/api/getInquiries')
      .then((res) => {
        setInquiries(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getInquiries()
  }, [])

  const inquiryDisplay = inquiries.map((inq) => {
    return <InquiryCard details={inq}/>
  })

  return (
    <div className='main-page'>
      <h1>Admin</h1>
      <Accordion className='accordion-container'>
      {inquiryDisplay}
      </Accordion>
    </div>
  )
}

export default AdminScreen