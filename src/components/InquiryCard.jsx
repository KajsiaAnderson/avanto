import React from 'react'
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'

const InquiryCard = ({details}) => {
  return (
    <AccordionItem className='acc-item'>
        <AccordionItemHeading>
            <AccordionItemButton className='acc-btn'>
                <img src={details.car.photos[0].url} className='acc-img' alt="car"/>
                <h3>{details.car.year} {details.car.make} {details.car.model}</h3>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <h4>User: {details.user.username}</h4>
            <p>Reason for Buying: {details.reason}</p>
        </AccordionItemPanel>
    </AccordionItem>
  )
}

export default InquiryCard