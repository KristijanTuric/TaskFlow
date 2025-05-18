import { motion, AnimatePresence } from 'framer-motion';
import { StyledButton } from '../styles/Button.style';

export default function CustomButton({ icon, title, sidebarOpen, ...attributes }) {
    return (
        <>
            <StyledButton type="button" {...attributes}>
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
            </StyledButton>
        </>
    );
}