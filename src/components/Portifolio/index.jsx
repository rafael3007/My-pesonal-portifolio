import React from 'react';
import { PortfolioButtons, PortifolioContainer, PortifolioItem, PortifolioItemImage, PortifolioSection } from './styles';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
  {
    id:2,
    image: IMG2,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
  {
    id:3,
    image: IMG4,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
  {
    id:4,
    image: IMG4,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
  {
    id:5,
    image: IMG5,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
  {
    id:6,
    image: IMG6,
    title: "Cryto Currency Dashboadr & Financial Visualization",
    github: "https://github.com/rafael3007",
    demo: "https://github.com/"
  },
];



const Portifolio = () => {
  return (
    <PortifolioSection id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <PortifolioContainer className='container'>
        {
          data.map(({id, item, image, demo,github,title})=>{
            return(
              <PortifolioItem key={id}>
                <PortifolioItemImage>
                  <img src={image} alt="" />
                </PortifolioItemImage>
                <h3>{title}</h3>
                <PortfolioButtons>
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank" >Live Demo</a>
                </PortfolioButtons>
              </PortifolioItem>
            )
          })
        }
        

        
      </PortifolioContainer>
      
    </PortifolioSection>
  )
}


export default Portifolio;