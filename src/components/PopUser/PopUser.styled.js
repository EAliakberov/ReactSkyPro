import styled from 'styled-components';

export const SPopUserSet = styled.div`
    position: absolute;
    top: 61px;
    right: max(0px, calc(50% - 630px));
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;

    .pop-user-set__name {
        color: #000;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: -0.14px;
        margin-bottom: 4px;
    }
    .pop-user-set__mail {
        color: #94a6be;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
        margin-bottom: 10px;
    }
    .pop-user-set__theme {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .pop-user-set__theme p {
        color: #000;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }
    .pop-user-set__theme input[type='checkbox'] {
        position: relative;
        width: 24px;
        height: 13px;
        border-radius: 100px;
        background: #eaeef6;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .pop-user-set__theme input[type='checkbox']::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94a6be;
        transition: 0.5s;
    }
    .pop-user-set__theme input:checked[type='checkbox']::before {
        left: 12px;
    }

    button {
        width: 72px;
        height: 30px;
        background: transparent;
        color: #565eef;
        border-radius: 4px;
        border: 1px solid #565eef;
    }
    button a {
        color: #565eef;
    }
`;
