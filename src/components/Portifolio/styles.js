import styled from "styled-components";

export const PortifolioSection = styled.section`

`

export const PortifolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
`

export const PortifolioItem = styled.article`
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    :hover {
        background: var(--color-primary-variant);
        border-color: transparent;
        
    }

    h3 {
        margin: 1.2rem 0 2rem;
        
    }
`

export const PortfolioButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const PortifolioItemImage = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;

`
