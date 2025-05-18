import CustomButton from "../CustomButton";
import { SidebarContainer, SidebarHeader, SidebarButtons } from "../../styles/Sidebar.style";
import IconButton from "../buttons/IconButton";
import { Bell, SidebarSimple, PlusCircle, Tray, CalendarDot, CalendarDots } from "@phosphor-icons/react";
import { ProjectList } from "./ProjectsList";
import { motion, AnimatePresence } from 'framer-motion';

export function Sidebar({handleSidebarToggle, isOpen}) {
    return (
        <SidebarContainer $isOpen={isOpen}>
            <SidebarHeader $isOpen={isOpen}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.span
                            key="Niki"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ marginLeft: '0.5rem', whiteSpace: 'nowrap' }}
                        >
                            <div>Niki</div>
                        </motion.span>
                    )}
                </AnimatePresence>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="Bell"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: 'inline-block' }}
                            >
                                <IconButton icon={<Bell size={25} />} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <IconButton icon={<SidebarSimple size={25} />} onClick={handleSidebarToggle} />
                </div>                
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