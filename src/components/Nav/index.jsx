/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Navigate from './styles';

import { 
  AiOutlineHome,
  AiOutlineUser
} from "react-icons/ai";

import { 
  BiBook,
  BiMessageSquareDetail
} from "react-icons/bi";

import { RiServiceLine } from "react-icons/ri";


const Nav = () => {

  const [activeNav,setActiveNav] = useState('#')

  useEffect(()=>{
    //set home active onLoad
    setActiveNav('#')
  },[])

  return (
    <Navigate>
      
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome/></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></a>
      <a href='#services' className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><RiServiceLine /></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
      
    </Navigate>
  )
}


export default Nav;