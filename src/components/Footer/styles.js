import styled from "styled-components";


export const FooterContainer = styled.footer`
    height: 32rem;
    background: var(--color-primary);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;

    @media screen and (max-width: 1024px){
        
    }

    @media screen and (max-width: 600px){
        height: 55rem;
    
    }    
`

export const FooterLogo = styled.a`
    color: var(--color-bg);
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    display: inline-block;


`
export const Permalinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;

    a {
        color: var(--color-bg);
    }

    @media screen and (max-width: 1024px){
        
    }

    @media screen and (max-width: 600px){
        
        flex-direction: column;
    }
`

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    a {
        background: var(--color-bg);
        color: var(--color-white);
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;
    }

    a:hover {
        background: transparent;
        color: var(--color-bg);
        border-color: var(--color-bg);
    }

    @media screen and (max-width: 1024px){
        
    }

    @media screen and (max-width: 600px){
        margin-bottom: 2.6rem;
    }
`

export const FooterCopyright = styled.div`
    margin-bottom: 4rem;
    color: var(--color-bg);
`