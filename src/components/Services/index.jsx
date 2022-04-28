import React from 'react'
import "./styles"
import { Service, ServiceHead, ServiceList, ServicesContainer, ServiceSection } from './styles';
import { BiCheck } from "react-icons/bi"


const Services = () => {
  return (
    <ServiceSection id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ServicesContainer className='container'>
        <Service>
          <ServiceHead>
            <h3>UI/UX Desing</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            
          </ServiceList>
        </Service>
        <Service>
          <ServiceHead>
            <h3>Web Development</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            
          </ServiceList>
        </Service>
        
        <Service>
          <ServiceHead>
            <h3>Content Creation</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            
          </ServiceList>
        </Service>
      </ServicesContainer>
    </ServiceSection>
  )
}


export default Services;