import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import InquiryCard from '../components/InquiryCard'

const AdminScreen = () => {
  return (
    <div className='main-page'>
        <h1>Admin</h1>
        <Accordion className='accordion-container'>
          <InquiryCard />
          <InquiryCard />
          <InquiryCard />
        </Accordion>
    </div>
  )
}

export default AdminScreen