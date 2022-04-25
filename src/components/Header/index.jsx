import React from 'react'
import "./styles"

import CTA from './CTA';
import Head from './styles';
import ME from "../../assets/me.png"
import HeaderSocials from './Socials/index.tsx';


const Header = () => {
  return (
    <Head className='head'>
      <div className="container header__container">
        <h5>Heloow I'm</h5>
        <h1>Rafael Brito</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" /> 
        </div>
        <a href="#contact" className="scroll__down">Scroll Down!</a>
      </div>
    </Head>
  )
}


export default Header;