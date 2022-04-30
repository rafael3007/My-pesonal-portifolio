import React from 'react';
import {ClientAvatar, TestimonialsSection } from './styles';

import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'


import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: avatar1,
    name: "João Pedro L. Santos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum magnam,excepturi ex exercitationem quos expedita praesentium reiciendis debitis dignissimos unde hic optio! Officia possimus reiciendis sint. Qui, optio rerum!"
  },
  {
    id: 2,
    image: avatar2,
    name: "Felipe Da Silva",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum magnam,excepturi ex exercitationem quos expedita praesentium reiciendis debitis dignissimos unde hic optio! Officia possimus reiciendis sint. Qui, optio rerum!"
  },
  {
    id: 3,
    image: avatar3,
    name: "Rafael da Silva",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum magnam,excepturi ex exercitationem quos expedita praesentium reiciendis debitis dignissimos unde hic optio! Officia possimus reiciendis sint. Qui, optio rerum!"
  },
  {
    id: 4,
    image: avatar4,
    name: "Felipe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum magnam,excepturi ex exercitationem quos expedita praesentium reiciendis debitis dignissimos unde hic optio! Officia possimus reiciendis sint. Qui, optio rerum!"
  }
]

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      
        <Swiper className="container testimonials__container"
        
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
            {
              data.map(({ image, name, description},index)=>{
                return(
                  <SwiperSlide key={index} className="testimonial">
                    <ClientAvatar>
                      <img src={image} alt="avatar1" />
                    </ClientAvatar>
                    <h5>{name}</h5>
                    <small>
                      {description}
                    </small> 
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
        
      
    </TestimonialsSection>
  )
}


export default Testimonials;