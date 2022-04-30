import styled from "styled-components";

export const ContactSection = styled.section`
    h2{
        margin-bottom: 0.2rem;
    }
    h5 {
        margin-bottom: 2rem;
    }
`
export const ContactContainer = styled.div`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
    }
`

export const ContactOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media screen and (max-width: 1024px) {
        
    }

    @media screen and (max-width: 600px) {
        
    }

`

export const ContactOption = styled.article`
    background: var(--color-bg-variant);
    padding: 1rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);

    :hover{
        background:transparent;
        border-color: var(--color-primary-variant);
    }

    .icon {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

    }

    a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.8rem;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input, textarea {
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        border: 2px solid var(--color-primary-variant);
        resize: none;
        color: var(--color-white);

    }
`