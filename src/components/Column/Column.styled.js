import styled from 'styled-components';

export const SColuumn = styled.div`
    .column__title {
        padding: 0 10px;
        margin: 15px 0;
    }
    .column__title p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }

    .cards {
        width: 100%;
        display: block;
        position: relative;
    }

    @media screen and (max-width: 1200px) {
        .cards {
            width: 100%;
            display: flex;
            overflow-y: auto;
        }
    }
`;
