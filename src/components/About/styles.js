import styled from "styled-components";

export const Section = styled.section`

    
`


export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
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

export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

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
    
`



