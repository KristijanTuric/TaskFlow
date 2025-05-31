import styled from 'styled-components';
import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.div)`
    width: 4rem;
    overflow: hidden;
    background-color: #FEEFDD;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 45px;
`

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: ${({ $isOpen }) => ($isOpen ? 'space-between' : 'center')};
    align-items: center;
    width: 100%;
`

export const SidebarIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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