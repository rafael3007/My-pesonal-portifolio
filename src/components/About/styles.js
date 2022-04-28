import styled from "styled-components";

export const Section = styled.section`
    
    
    
`


export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;

    /*  RESPONSIVE */

    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        gap: 0;
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        
    }
`

export const AboutMe = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
        45deg, transparent,
        var(--color-primary),
        transparent
    );

    display: grid;
    place-items: center;

    /*  RESPONSIVE */

    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        width: 50%;
        margin: 2rem auto 4rem;
    }
    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600px) {
        width: 65%;
        margin: 0 auto 3rem;
    }

`

export const AboutMeImg = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);
    
    :hover {
        transform: rotate(0) 
    }
`

export const AboutContent = styled.div`
    text-align: center;
    
    p {
        margin: 2rem 0 2.6rem;
        color: var(--color-light)
    }

    /*  RESPONSIVE */

    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        
        
        p {
            margin: 1rem;
        }
    }
    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        div {
            display: flex;
            flex-direction: column;
            
            color: green;
        }
        
        p {
            margin: 1.5rem 0;
        }
    }
`

export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    article {
        background: var(--color-bg-variant);
        border: 1px solid transparent;
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        transition: var(--transition);
    }

    article:hover {
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }

    .about__icon {
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 0.95rem;

    }

    small {
        font-size: 0.7rem;
        color: var(--color-light)
    }


    /*  RESPONSIVE */

    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        
    }
    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
`



