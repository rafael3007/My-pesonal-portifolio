import styled from "styled-components";


export const ExperienceSection = styled.section`

    /*  RESPONSIVE */
    
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        margin-top: 10rem;
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        
    }
`;

export const ExperienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    /*  RESPONSIVE */
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        gap: 1rem;

    }

    

`;

export const ExperienceBox = styled.div`
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    :hover{
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }

    h3 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-primary)
    }

    /*  RESPONSIVE */
    
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        width: 100%;
        padding: 2rem 1rem;
    }

`

export const ExperienceContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem; 

    /*  RESPONSIVE */
    
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        padding: 1rem;
    }

    

`

export const ExperienceDetails = styled.article`
    display: flex;
    gap: 1rem;

    .icon {
        margin-top: 6px;
        color: var(--color-primary);
    }

`

