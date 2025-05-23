import { motion, AnimatePresence } from 'framer-motion';
import { SidebarMainButton } from '../styles/Button.style';

export default function CustomButton({ icon, title, sidebarOpen, ...attributes }) {
    return (
        <>
            <SidebarMainButton
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="button"
                {...attributes}>
                {icon}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.span
                            key={title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ marginLeft: '0.5rem', whiteSpace: 'nowrap' }}
                        >
                            {title}
                        </motion.span>
                    )}
                </AnimatePresence>
            </SidebarMainButton>
        </>
    );
}