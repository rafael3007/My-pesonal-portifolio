import styled from "styled-components";

const Head = styled.header`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;

    .header__container {
        text-align: center;
        height: 100%;
        position: relative;
    }

    .me {
        background: linear-gradient(var(--color-primary),transparent);
        width: 22rem;
        height: 30rem;
        position: absolute;
        left: calc(50% - 11rem);
        margin-top: 4rem;
        border-radius: 12rem 12rem 0 0;
        overflow: hidden;
        padding: 5rem 1.5rem 1.5rem 1.5rem;      
    }

    .scroll__down {
        position: absolute;
        right: -2.3rem;
        bottom: 5rem;
        transform: rotate(90deg);
        font-weight: 300;
        font-size: 0.9rem;
    }

    /*  RESPONSIVE */

    /*--- Media queries (medium devices) ---*/
    @media screen and (max-width: 1024px){
        .head {
            height: 68vh;
        }
    }

    /*--- Media queries (small devices) ---*/
    @media screen and (max-width: 600) {
        .head {
            height: 100vh;
        }

        .header__socials,
        .scroll__down {
            display: none;
        }
    }

    
`;

export default Head;