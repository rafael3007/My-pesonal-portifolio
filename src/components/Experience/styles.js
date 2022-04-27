import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

`

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

`

export const ExperienceContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;

`

export const ExperienceDetails = styled.article`
    display: flex;
    gap: 1rem;

    .icon {
        margin-top: 6px;
        color: var(--color-primary);
    }

`

