import React from 'react';
import { PortfolioButtons, PortifolioContainer, PortifolioItem, PortifolioItemImage, PortifolioSection } from './styles';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portifolio = () => {
  return (
    <PortifolioSection id="porifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>

      <PortifolioContainer className='container'>
        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG1} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>

        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG2} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>

        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG3} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>

        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG4} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>

        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG5} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>

        <PortifolioItem>
          <PortifolioItemImage>
            <img src={IMG6} alt="" />
          </PortifolioItemImage>
          <h3>This is a portfolio Item title</h3>
          <PortfolioButtons>
            <a href="https://github.com/rafael3007/" className='btn' target="_blank">GitHub</a>
            <a href="https://dribbble.com/rafael3007/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </PortfolioButtons>
        </PortifolioItem>
      </PortifolioContainer>
      
    </PortifolioSection>
  )
}


export default Portifolio;