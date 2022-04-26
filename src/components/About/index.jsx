import React from 'react'
import { Section,AboutContainer,AboutMe,AboutMeImg,AboutCards } from "./styles"

import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container ">
        <AboutMe>
          <AboutMeImg>
            <img src={ME} alt="About Image" />
          </AboutMeImg>
        </AboutMe>

        <div className="about__content">
          <AboutCards>
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </AboutCards>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae iste facere suscipit molestiae cum, tenetur enim dolor dolores adipisci exercitationem nulla aliquam tempore eius ex totam, nemo vitae officia cupiditate.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </AboutContainer>
    </Section>
  )
}

export default About;