import styled from 'styled-components';

export const Navbar = styled.header`
    height: 25%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    figure > img {
        width: 120px;
    }

    h1 {
        font-size: 14pt;
        margin-left: 10px;
    }

    .link {
        background-color: #f00;
        padding: 15px;
        border-radius: 10px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        margin-right: 30px;
    }

    button {
        font-size: 24pt;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        color: #f00;
    }
`;

export const Container = styled.main`
    h1 {
        margin-left: 60px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin-left: 60px;
    }

    li {
        list-style-type: none;
        padding: 30px;
        width: 90%;
        border-radius: 10px;
        box-shadow: 1px 1px 3px #9f9f9f;
    }

    li > strong {
        font-size: 18pt;
    }

    li > p {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 14;
        color: #707070;
    }

    li > button {
        background-color: rgba(0, 0, 0, 0);
        font-size: 24pt;
        color: #707070;
        border: none;
        position: relative;
        bottom: 90%;
        left: 95%;
        transition: 0.1s;
    }

    li > button:hover {
        transition: 0.1s;
        opacity: 0.8;
    }

    @media screen and (max-width: 750px) {
        ul {
            display: flex;
            flex-direction: column;
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
    width: 50%;
    margin: auto;
`;
