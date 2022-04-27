import React from 'react'
import { ExperienceContainer,ExperienceBox, ExperienceContent, ExperienceDetails, ExperienceSection}from "./styles"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer className="container">
        <ExperienceBox>
          <h3>Frontend Development</h3>
          <ExperienceContent>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </ExperienceDetails>

            

          </ExperienceContent>
        </ExperienceBox>
        <ExperienceBox>
          <h3>Backend Development</h3>
            <ExperienceContent>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>MongoDD</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </ExperienceDetails>           

            </ExperienceContent>

        </ExperienceBox>
      </ExperienceContainer>
    </ExperienceSection>
  )
}


export default Experience;