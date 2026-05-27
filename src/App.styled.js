import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }
    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    button,
    ._btn {
        cursor: pointer;
        outline: none;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        color: #000000;
    }

    .wrapper {
        max-width: 100%;
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        background-color: #f1f1f1;
    }

    .container {
        max-width: 1260px;
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
    }

    ._hover01 {
        &&:hover {
            background-color: #33399b;
        }
    }

    ._hover02._hover02:hover,
    .header__user.header__user:hover {
        color: #33399b;
    }

    ._hover02._hover02:hover::after,
    .header__user.header__user:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }

    ._hover03 {
        &&:hover {
            background-color: #33399b;
            color: #ffffff;
        }
    }

    ._hover03 {
        &&:hover a {
            color: #ffffff;
        }
    }

    .subttl {
        color: #000;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
    }

    ._orange {
        background-color: #ffe4c2;
        color: #ff6d00;
    }
    ._green {
        background-color: #b4fdd1;
        color: #06b16e;
    }
    ._purple {
        background-color: #e9d4ff;
        color: #9a48f1;
    }
    ._gray {
        background: #94a6be;
        color: #ffffff;
    }
    ._active-category {
        opacity: 1 !important;
    }

    .pop-wrap {
        position: relative;
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 495px) {
        .container {
            width: 100%;
            padding: 0 16px;
        }
    }
`;
