import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, ContainerError } from './style';
import Icon from '../../assets/logo.svg';
import Heroes from '../../assets/heroes.png';
import { FaSignInAlt } from 'react-icons/fa';
import api from '../../api';

function Login() {
    const [id, setID] = useState('');
    const [status4User, setStatus4User] = useState(<></>);
    const history = useHistory();

    async function handlerButtonClick(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', { id });

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.ong.name);

            history.push('/home');
        } catch (err) {
            return await setStatus4User(
                <ContainerError>This ID doesn't exist</ContainerError>
            );
        }
    }

    return (
        <>
            {status4User}
            <Container>
                <form className="formularie">
                    <figure className="logo-figure">
                        <img src={Icon} alt="BeTheHero Icon" />
                    </figure>

                    <label>
                        <h1>Do your login</h1>
                    </label>
                    <input
                        value={id}
                        type="text"
                        onChange={e => setID(e.target.value)}
                        placeholder="Your ID"
                        required="required"
                    />
                    <button type="button" onClick={handlerButtonClick}>
                        Login
                    </button>
                    <Link className="link" to="/registre">
                        <span>
                            <FaSignInAlt />
                        </span>{' '}
                        I don't have login
                    </Link>
                </form>
                <figure className="heroes-figure">
                    <img src={Heroes} alt="Heroes" />
                </figure>
            </Container>
        </>
    );
}

export default Login;
