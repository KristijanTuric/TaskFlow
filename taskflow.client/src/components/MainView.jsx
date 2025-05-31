import { MainViewContainer } from '../styles/MainView.style';

export function MainView({isOpen}) {
    return (
        <MainViewContainer
            animate={{
                width: isOpen ? '85vw' : 'calc(100vw - 4rem)',          
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <h1>Test</h1>
        </MainViewContainer>
    );
}