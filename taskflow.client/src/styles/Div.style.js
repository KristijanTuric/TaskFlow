import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.15);
    z-index: 999;
`

export const Modal = styled.div`
    width: 20vw;
    padding: 1.05rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    background-color: white;
`