import styled, { keyframes } from 'styled-components';

export const SEmptyColumn = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    .column__title {
        padding: 0 10px;
        margin: 15px 0;
        width: 230px;
    }
    & .column__title p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }

    & .cards {
        width: 100%;
        display: block;
        position: relative;
    }

    @media screen and (max-width: 1200px) {
        .cards {
            width: 100%;
            height: 169px;
            display: flex;
            overflow-y: auto;
        }
    }
`;

const cardAnimation = keyframes`   
        0% {           
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }    
`;

export const SEmptyCard = styled.div`
    padding: 5px;

    animation: ${cardAnimation} 500ms ease-in-out infinite alternate forwards;

    .cards__card {
        width: 220px;
        height: 130px;
        background-color: #ffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }

    .card__group {
        width: 100%;
        height: 20px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .card__theme {
        width: 82px;
        height: 20px;
        top: 15px;
        left: 13px;
        opacity: 1;
        border-radius: 18px;
        background: linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%);
    }
    .card__theme p {
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
    }
    .card__btn {
        width: 18px;
        height: 4px;
        background: linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%);
    }
    .card__btn div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    }
    .card__title {
        width: 113px;
        height: 13px;
        background: linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%);
    }
    .card__content {
        height: 64px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .card__date {
        width: 58px;
        height: 13px;
        background: linear-gradient(90deg, #c1cddc -6.32%, #e9eef7 46.75%, #c1cddc 106.46%);
    }

    @media screen and (max-width: 1200px) {
        .cards__card {
            width: 220px;
            height: 130px;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: stretch;
            padding: 15px 13px 19px;
        }
    }
`;
