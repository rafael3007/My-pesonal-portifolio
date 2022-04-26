import styled from "styled-components";

const Navigate = styled.nav`
   
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: calc(50% - 130px);
    transform: translateY(-50%) ;
    display: flex;
    bottom: 3rem;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    a {
        background: transparent;
        padding: .5rem;
        border-radius: 50%;
        display: flex;
        color: var(--color-light);
        font-size: 1.1rem;
    }

    a:hover {
        background: rgba(0,0,0,0.3);
    }

    a.active {
        background: var(--color-bg);
        color: var(--color-white);
    }


    
`    
export default Navigate;