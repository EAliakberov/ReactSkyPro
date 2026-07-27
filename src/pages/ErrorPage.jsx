import styled from 'styled-components';
import { Header } from '../components/Header/Header';

const SErrorPage = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        <>
            <Header></Header>
            <SErrorPage className="error-page">
                <h1>404</h1>
                <p>страница не найдена</p>
            </SErrorPage>
        </>
    );
};
