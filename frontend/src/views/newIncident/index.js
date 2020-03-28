import React, { useState } from 'react';
import { Container, ContainerError, ContainerSuccess } from './style';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import api from '../../api';

function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState();
    const [status4User, setStatus4User] = useState(<></>);
    async function handlerButtonClick(e) {
        e.preventDefault();
        try {
            await api.post(
                '/incidents',
                {
                    title,
                    description,
                    value,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('ongID'),
                    },
                }
            );

            return setStatus4User(
                <ContainerSuccess>
                    Success in create a new incident
                </ContainerSuccess>
            );
        } catch (err) {
            return setStatus4User(
                <ContainerError>
                    Error in create a new incident, please try again
                </ContainerError>
            );
        }
    }

    return (
        <>
            {status4User}
            <Container>
                <aside>
                    <figure>
                        <img src={Logo} alt="BeTheHero Logo" />
                    </figure>
                    <h1>Registre new incident</h1>
                    <p>describe the incident to find a hero to resolve it</p>
                    <Link className="link" to="/home">
                        <span>
                            <FaLongArrowAltLeft />
                        </span>{' '}
                        Return to home page
                    </Link>
                </aside>
                <form>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title of incident"
                        required="required"
                    />
                    <textarea
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Description"
                        required="required"
                    />
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Value"
                        required="required"
                    />
                    <button
                        type="button"
                        onClick={handlerButtonClick}
                        className="btnRegistre"
                    >
                        Registre
                    </button>
                    <Link to="/home" className="btnCancel">
                        Cancel
                    </Link>
                </form>
            </Container>
        </>
    );
}

export default NewIncident;
