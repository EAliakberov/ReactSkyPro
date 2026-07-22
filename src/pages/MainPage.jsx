import { Main } from '../components/Main/Main';
import { GlobalStyle } from '../App.styled';
import { Header } from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SWrapper = styled.div`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
`;

export const MainPage = ({ isAuth}) => {
    return (
        <>
            <GlobalStyle />
            <SWrapper>
                <Header isAuth={isAuth}/>
                <Main />

                <Outlet />
            </SWrapper>
        </>
    );
};
