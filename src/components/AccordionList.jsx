import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { CaretDown } from 'phosphor-react';

function AccordionList({ i, body }) {
  return (
    <Accordion>
      <AccordionSummary id={`option${i}-header`} aria-controls={`option${i}-content`} expandIcon={<CaretDown />}>
        <div className="text-base text-left text-secondaryColors-400 font-bold">{body.title}</div>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-sm text-left">{body.content}</p>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionList