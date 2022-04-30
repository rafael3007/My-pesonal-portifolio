import React from 'react'
import { FooterCopyright, FooterLogo, FooterSocials, Permalinks,FooterContainer } from './styles';

import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo href="#">Rafael</FooterLogo>
      <Permalinks>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>   
      </Permalinks>
      <FooterSocials>
        <a href="https://www.linkedin.com/in/rafael-brito-sampaio-88ab05196/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/rafael3007" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/rafaa_brt7/" target="_blank" rel="noreferrer"><FiInstagram/></a>
      </FooterSocials>

      <FooterCopyright>
        <small>
          &copy; Rafael Brito Sampaio. Todos os direitos reservados.
        </small>
      </FooterCopyright>
    </FooterContainer>
  )
}


export default Footer;