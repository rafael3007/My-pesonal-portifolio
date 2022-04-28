import styled from "styled-components";

export const ServiceSection = styled.section`

`;

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

     /*  RESPONSIVE */
    
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        gap: 2rem
    }

    /*--- Media queries (small devices) ---*/
    @media(max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`
export const Service = styled.article`
    background: var(--color-bg-variant);
    border-radius: 0 0 2rem 2rem;
    border: 1px solid var(--color-primary);
    height: fit-content;
    transition: var(--transition);

    :hover {
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }

     /*  RESPONSIVE */
    
    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        height: auto;
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600px) {
        
    }
`;

export const ServiceHead = styled.div`
    background: var(--color-primary);
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

    h3 {
        color: var(--color-bg);
        font-size: 1rem;
        text-align: center;
    }
`;

export const ServiceList = styled.ul`
    padding: 2rem;

    li {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }

    li .icon {
        color: var(--color-primary);
        margin-top: 2px;
    }

    li p {
        font-size: 0.9rem
    }

    
`;