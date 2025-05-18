import { useState } from 'react';
import { createPortal } from 'react-dom';
import NewTaskModal from './NewTaskModal';
import { StyledButton } from '../../styles/Button.style';

export default function DialogPortal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <StyledButton onClick={() => setShowModal(!showModal)}>Show modal using a portal</StyledButton>
            {showModal && createPortal(
                <NewTaskModal onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}