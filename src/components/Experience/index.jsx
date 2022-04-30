import React from 'react'
import { ExperienceContainer,ExperienceBox, ExperienceContent, ExperienceDetails, ExperienceSection}from "./styles"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h5>Minhas Skills</h5>
      <h2>Experiência</h2>

      <ExperienceContainer className="container">
        <ExperienceBox>
          <h3>Frontend Development</h3>
          <ExperienceContent>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Next</h4>
                <small className='text-light'>Básico</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Básico</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Styled Components</h4>
                <small className='text-light'>Básico</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
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
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>

              <ExperienceDetails>
                <BsPatchCheckFill className='icon'/>
                <div>
                  <h4>API (Rest)</h4>
                  <small className='text-light'>Básico/Intermediário</small>
                </div>
              </ExperienceDetails>            

            </ExperienceContent>

        </ExperienceBox>
      </ExperienceContainer>
    </ExperienceSection>
  )
}


export default Experience;