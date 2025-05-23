import styled from 'styled-components';
import { motion } from "framer-motion";

export const SidebarContainer = styled.div`
    min-width: ${({ $isOpen }) => ($isOpen ? '200px' : 'none')};
    width: ${({ $isOpen }) => ($isOpen ? '15vw' : '4rem')};
    overflow: hidden;
    background-color: #FEEFDD;
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

export const SidebarProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SidebarProjectDiv = styled(motion.div)`
    color: #201E1F;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
    border-bottom: 1px solid #FAAA8D;
    font-weight: bold;
`