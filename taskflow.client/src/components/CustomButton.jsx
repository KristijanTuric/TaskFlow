import { StyledButton } from '../styles/Button.style';

export default function CustomButton({ icon, title, ...attributes }) {
    return (
        <>
            <StyledButton type="button" {...attributes}>{icon} {title}</StyledButton>
        </>
    );
}