import { StyledIconButton } from '../../styles/Button.style';

export default function IconButton({ icon, ...attributes }) {
    return (
        <>
            <StyledIconButton
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="button"
                {...attributes}>{icon}</ StyledIconButton>
        </>
    );
}