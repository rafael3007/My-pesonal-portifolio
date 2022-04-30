import React from 'react'
import { Section,AboutContainer,AboutMe,AboutMeImg,AboutCards, AboutContent } from "./styles"

import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <Section id="about">
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <AboutContainer className="container ">
        <AboutMe>
          <AboutMeImg>
            <img src={ME} alt="About Image" />
          </AboutMeImg>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1 ano trabalhando como Dev</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Formação Acadêmica</h5>
              <small>Bacharelado em Sistemas De Informações (em andamento)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>+7 Concluídos</small>
            </article>
          </AboutCards>
          

          <p>
            Me chamo Rafael, tenho 21 anos, nascido e criado em Vitória da Conquista-Bahia. Comecei os estudos sobre programação, principalmente
             voltados à Web a 3 anos. Apesar de ter conhecimento teórico sobre passei a devolver aplicações dos mais variados tipos a 1 ano e meio 
             aproximadamente. Sou autodidata e pra ser mais especifico tenho uma facilidade maior em aprender observando, ou seja Youtube e documentações
             são uma grande fonte de ajuda no desenvolvimento. Fora das linhas de código gosto de praticar esportes, principalmente futebol, seja quadra,
             campo ou society, além de outros esportes como ping pong, volei... Enfim gosto de atividade física no geral, inclusive gosto de treinar na 
             academia. Nas horas vagas uso pra estudar e me divetir. Atualmente tenho estudado um pouco mais sobre o backend, principalmente Docker e
             alternando entre bancos de dados como Mysql e MongoDB. E para diversão costumo estar com os amigos, para conversar sobre qualquer coisa
             desde "resenhas" do dia a dia à discutir ideias.


          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        
        </AboutContent>
      </AboutContainer>
    </Section>
  )
}

export default About;