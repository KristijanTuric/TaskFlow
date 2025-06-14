import styled from 'styled-components';
import { motion } from "framer-motion";

export const StyledButton = styled.button`
    appearance: none;
    background-color: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #24292E;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;

    &:hover {
        background-color: #F3F4F6;
        text-decoration: none;
        transition-duration: 0.1s;
        color: #F0544F;
    }

    &:disabled {
        background-color: #FAFBFC;
        border-color: rgba(27, 31, 35, 0.15);
        color: #959DA5;
        cursor: default;
    }

    &:active {
        background-color: #EDEFF2;
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }

    &:focus {
        outline: 1px transparent;
    }

    &:before {
        display: none;
    }

    &:-webkit-details-marker {
        display: none;
    }

`

export const StyledIconButton = styled(motion.button)`
    appearance: none;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;

    &:hover {
        text-decoration: none;
        color: #FF4000;
    }

    &:disabled {
        background-color: #FAFBFC;
        border-color: rgba(27, 31, 35, 0.15);
        color: #959DA5;
        cursor: default;
    }

    &:active {
    }

    &:focus {
        outline: 1px transparent;
    }

    &:before {
        display: none;
    }

    &:-webkit-details-marker {
        display: none;
    }
`

export const SidebarMainButton = styled(motion.button)`
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 6px;
    color: #24292E;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;
    font-weight: bold;

    &:hover {
        text-decoration: none;
        transition-duration: 0.1s;
        color: #FF4000;
    }

    &:disabled {
        background-color: #C6D8D3;
        color: #959DA5;
        cursor: default;
    }

    &:active {
        scale: 0.95;
    }

    &:focus {
        outline: 1px transparent;
    }

    &:before {
        display: none;
    }

    &:-webkit-details-marker {
        display: none;
    }

`