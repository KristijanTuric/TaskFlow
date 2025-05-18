import { StyledIconButton } from '../../styles/Button.style';

export default function IconButton({ icon, ...attributes }) {
    return (
        <>
            <StyledIconButton type="button" {...attributes} >{icon}</StyledIconButton>
        </>
    );
}