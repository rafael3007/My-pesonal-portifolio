import React from 'react'
import { FooterCopyright, FooterLogo, FooterSocials, Permalinks,FooterContainer } from './styles';

import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo href="#">Rafael Brito Sampaio</FooterLogo>
      <Permalinks>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>   
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