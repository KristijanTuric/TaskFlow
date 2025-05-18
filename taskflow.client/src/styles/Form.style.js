import styled from 'styled-components';

export const DefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div:nth-of-type(1) {
        border-bottom: 1px solid gray;
        padding-bottom: 22px;
    }

    div {
        display: flex;
        gap: 5px;
        justify-content: space-between;
    }

    input {
        border: none;
        font-size: 1.3em;
        padding: 5px;
    }

    input:focus {
        outline: none;
    }
`