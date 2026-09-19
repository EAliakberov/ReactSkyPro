import styled from 'styled-components';

export const SMain = styled.main`
    min-width: fit-content;
    background-color: #eaeef6;

    .container {
        max-width: none;
        min-width: fit-content;
    }

    .main__block {
        width: fit-content;
        margin: 0 auto;
        padding: 25px 0 49px;
    }
    .main__content {
        min-width: fit-content;
        display: flex;
    }
    .main__column {
        width: 20%;
        margin: 0 auto;
        display: block;
    }

    @media screen and (max-width: 1200px) {
        .main__column {
            width: 100%;
            margin: 0 auto;
            display: block;
        }
        .main__block {
            width: 100%;
            margin: 0 auto;
            padding: 40px 0 64px;
        }
        .main__content {
            display: block;
        }
    }
`;
