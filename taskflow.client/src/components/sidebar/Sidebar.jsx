import CustomButton from "../CustomButton";
import IconButton from "../buttons/IconButton";
import { ProjectList } from "./ProjectsList";

import { SidebarContainer, SidebarHeader, SidebarButtons, SidebarIconsWrapper } from "../../styles/Sidebar.style.js";
import { Bell, SidebarSimple, PlusCircle, Tray, CalendarDot, CalendarDots } from "@phosphor-icons/react";

import { motion, AnimatePresence } from 'framer-motion';

export function Sidebar({handleSidebarToggle, isOpen}) {
    return (
        <SidebarContainer
            animate={{
                width: isOpen ? '15vw' : '4rem',
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <SidebarHeader $isOpen={isOpen}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="user.name"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ marginLeft: '0.5rem', whiteSpace: 'nowrap' }}
                        >
                            <div style={{ fontSize: "26px", fontWeight: "bold" }}>Niki</div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <SidebarIconsWrapper>
                    <AnimatePresence mode="wait">
                        {isOpen && (
                            <motion.div
                                key="Bell"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: 'inline-block' }}
                            >
                                <IconButton icon={<Bell size={28} />} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <IconButton icon={<SidebarSimple size={28} />} onClick={handleSidebarToggle} />
                </SidebarIconsWrapper>               
            </SidebarHeader>

            <SidebarButtons>
                <CustomButton title="Add task" icon={<PlusCircle size={32} />} sidebarOpen={isOpen} />
                <CustomButton title="Inbox" icon={<Tray size={32} />} sidebarOpen={isOpen} />
                <CustomButton title="Today" icon={<CalendarDot size={32} />} sidebarOpen={isOpen} />
                <CustomButton title="Upcoming" icon={<CalendarDots size={32} />} sidebarOpen={isOpen} />
            </SidebarButtons>

            <AnimatePresence>
                {isOpen && (
                    <motion.span
                        key="Projects"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ marginLeft: '0.5rem', whiteSpace: 'nowrap' }}
                    >
                        <ProjectList projects={["Tennis", "Programming", "Daily"]} />
                    </motion.span>
                )}
            </AnimatePresence>
        </SidebarContainer>
    );
}