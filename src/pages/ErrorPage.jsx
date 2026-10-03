import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { GlobalStyle } from '../App.styled';

const SErrorPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    position: relative;
    margin: 0;
    padding: 0;
`;

const SError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #eaeef6;
    min-height: 100%;
    flex-grow: 1;

    & h1 {
        margin: 0;
        padding: 0;
        font-size: 200px;
    }
    & p {
        margin: 0;
        padding: 0;
        font-size: 32px;
    }
`;

export const ErrorPage = () => {
    return (
        <SErrorPage>
            <GlobalStyle />
            <Header></Header>
            <SError className="error-message">
                <h1>404</h1>
                <p>Cтраница не найдена</p>
            </SError>
        </SErrorPage>
    );
};
