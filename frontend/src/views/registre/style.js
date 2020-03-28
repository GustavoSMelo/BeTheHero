import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    aside {
        display: flex;
        flex-direction: column;
        font-size: 18pt;
    }

    aside > p {
        margin-top: 15px;
        color: #707070;
    }

    aside > h1 {
        margin-top: 40px;
    }

    aside > .link {
        font-weight: bold;
        margin-top: 30px;
        text-decoration: none;
        color: #000;
    }

    aside > .link > span {
        color: #f00;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form > input {
        padding: 12px;
        margin-top: 10px;
        font-size: 16pt;
        border: solid 2px #cfcfcf;
        border-radius: 5px;
        color: #999999;
    }

    form > button {
        background-color: #f00;
        color: #fff;
        padding: 20px;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 14pt;
        margin-top: 15px;
    }

    @media screen and (max-width: 970px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        aside > figure {
            display: flex;
            align-items: center;
        }

        aside,
        form {
            margin-top: 50px;
        }
    }
`;

export const ContainerError = styled.section`
    background-color: #ffa8a6;
    color: #f00;
    text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 16pt;
`;

export const ContainerSuccess = styled.section`
    background-color: #c7ffcb;
    color: #00fe14;
    text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 16pt;
`;
