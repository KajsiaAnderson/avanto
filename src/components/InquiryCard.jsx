import React from 'react'
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'

const InquiryCard = () => {
  return (
    <AccordionItem className='acc-item'>
        <AccordionItemHeading>
            <AccordionItemButton>
                <h3>This is a pretend inquiry.</h3>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa eius ab corrupti! Pariatur quia natus dolorem unde commodi mollitia illo error sapiente, doloribus, odio modi optio architecto, labore explicabo asperiores quidem molestiae inventore nobis minima! Illo omnis exercitationem at ea error unde amet quam, reprehenderit voluptates iusto molestiae deleniti repellendus quae quibusdam dignissimos ullam porro autem impedit! Molestiae ullam iste esse, doloremque quasi harum totam quae velit iure recusandae mollitia. Sint consectetur quam totam odio quibusdam accusantium non officiis!</p>
        </AccordionItemPanel>
    </AccordionItem>
  )
}

export default InquiryCard