import styled from 'styled-components';

export const SidebarContainer = styled.div`
    width: ${({ $isOpen }) => ($isOpen ? '15vw' : '4rem')};
    overflow: hidden;
    background-color: lightblue;
    min-height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 45px;
    transition: all 0.3s ease-in-out;
`

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: ${({ $isOpen }) => ($isOpen ? 'space-between' : 'center')};
    align-items: center;

    div:nth-of-type(2) {
        display: flex;
        gap: 5px;
    }
`

export const SidebarButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    button {
        font-size: 18px;
    }
`