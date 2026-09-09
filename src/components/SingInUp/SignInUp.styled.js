import styled from 'styled-components';

export const SWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #eaeef6;

    & .container-signinup {
        display: block;
        width: 100vw;
        min-height: 100vh;
        margin: 0 auto;
    }
`;

export const SModal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modal {
        &__ttl h2 {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.6px;
            margin-bottom: 20px;
        }

        &__form-login {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & input:not(:last-of-type) {
                margin-bottom: 7px;
            }
        }

        &__block {
            display: block;
            margin: 0 auto;
            background-color: #ffffff;
            max-width: 368px;
            width: 100%;
            padding: 50px 60px;
            border-radius: 10px;
            border: 0.7px solid #d4dbe5;
            box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
        }

        &__input {
            width: 100%;
            min-width: 100%;
            border-radius: 8px;
            border: 0.7px solid rgba(148, 166, 190, 0.4);
            outline: none;
            padding: 10px 8px;

            &::placeholder {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.28px;
                color: #94a6be;
            }
            &.error {
                border: solid 1px red;
            }
        }

        &__btn-signup-ent,
        &__btn-enter {
            width: 100%;
            height: 30px;
            background-color: #565eef;
            border-radius: 4px;
            margin-top: 20px;
            margin-bottom: 20px;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            line-height: 21px;
            font-weight: 500;
            letter-spacing: -0.14px;
            color: #ffffff;

            & a {
                width: 100%;
                height: 100%;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        &__form-group {
            text-align: center;
            & p,
            a {
                color: rgba(148, 166, 190, 0.4);
                font-size: 14px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: -0.14px;
            }
            & a {
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 375px) {
        background-color: #ffffff;
        .modal {
            &__block {
                max-width: 368px;
                width: 100%;
                padding: 0 16px;
                border-radius: none;
                border: none;
                box-shadow: none;
            }
            &__btn-enter {
                height: 40px;
            }
        }
    }
`;
