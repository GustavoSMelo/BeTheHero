import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .formularie,
    .heroes-figure {
        margin-top: 150px;
    }

    .heroes-figure > img {
        width: 100%;
    }

    .formularie {
        padding-top: 130px;
        display: flex;
        flex-direction: column;
    }

    .formularie > .logo-figure {
        width: 300px;
        height: 100px;
    }

    .formularie > label {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    input {
        width: 100%;
        font-size: 20pt;
        padding: 15px;
        border: solid 3px #9f9f9f9f;
        border-radius: 10px;
        color: #707070;
    }

    button {
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 15px;
        border: none;
        background-color: #f00;
        font-size: 16pt;
        font-weight: bold;
        color: #fff;
    }

    .link {
        font-weight: bold;
        font-size: 16pt;
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    .link > span {
        color: #f00;
    }

    @media screen and (max-width: 970px) {
        display: flex;
        flex-direction: column;

        .heroes-figure {
            float: right;
        }

        .heroes-figure img {
            width: 100%;
        }
    }
`;

export const ContainerError = styled.section`
    display: flex;
    background-color: #ffa8a6;
    color: #f00;
    text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 16pt;
    z-index: 3;
    text-align: center;
    align-items: center;
    justify-content: center;
`;
