import React from 'react'
import Div from './styles'

import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"


const HeaderSocials = () => {
  return (
    <Div>
        
        <a href="https://www.linkedin.com/in/rafael-brito-sampaio-88ab05196/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/rafael3007" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.dribbble.com" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </Div>
  )
}

export default HeaderSocials;