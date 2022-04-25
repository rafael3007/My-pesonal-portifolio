import React from 'react'
import CV from "../../../assets/cv.pdf"
import { Div } from './styles'

const CTA = () => {
  return (
      <Div className='cta'>
          <a href={CV} download className="btn">Download CV</a>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </Div>
  )
}

export default CTA