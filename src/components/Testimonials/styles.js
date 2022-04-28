import styled from "styled-components";

export const TestimonialsSection = styled.section`

`

export const TestimonialsContainer = styled.div`
    width: 40%;
    
    @media screen and (max-width: 1024px) {
        width:60%;
    }

    @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
    }
`

export const Testimonial = styled.article`
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;

    small {
        color: var(--color-light);
        font-weight: 300;
        display: block;
        width: 80%;
        margin: 0.8rem auto 0;
    }

    @media screen and (max-width: 1024px) {
        
    }

    @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
    }
`

export const ClientAvatar = styled.div`
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
`
