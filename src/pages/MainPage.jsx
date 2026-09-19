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

export const MainPage = () => {
    //const [token, setToken] = useState('bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck');

    return (
        <>
            <GlobalStyle />
            <SWrapper>
                <Header />
                <Main />
                <Outlet />
            </SWrapper>
        </>
    );
};
