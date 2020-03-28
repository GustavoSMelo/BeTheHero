import React, { useState, useEffect } from 'react';
import { Navbar, Container, ContainerError } from './style';
import Logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrashAlt } from 'react-icons/fa';
import api from '../../api';

function Main() {
    const [listOfIncidents, setListOfIncidents] = useState([]);
    const history = useHistory();
    const [status4User, setStatus4User] = useState(<></>);
    useEffect(() => {
        async function getDatabyAPI() {
            const response = await api.get('/incidents/show', {
                headers: {
                    Authorization: localStorage.getItem('ongID'),
                },
            });

            await setListOfIncidents(response.data.incidents);
        }
        getDatabyAPI();
    }, []);

    function handlerButtonLogout() {
        localStorage.setItem('ongID', '');
        localStorage.setItem('ongName', '');

        history.push('/');
    }

    async function handleDeleteIncident(id) {
        try {
            await api.delete('/incidents', {
                headers: {
                    id,
                    Authorization: localStorage.getItem('ongID'),
                },
            });

            setListOfIncidents(listOfIncidents.filter(item => item.id !== id));
        } catch (err) {
            await setListOfIncidents(
                <ContainerError>
                    Erro to remove a incident, please try again
                </ContainerError>
            );
        }
    }

    return (
        <>
            <Navbar>
                <span>
                    <figure>
                        <img src={Logo} alt="Be The Hero" />
                    </figure>
                    <h1>Welcome, {localStorage.getItem('ongName')}</h1>
                </span>
                <span>
                    <Link className="link" to="/new/incident">
                        Registre new cases
                    </Link>
                    <button type="button" onClick={handlerButtonLogout}>
                        <FaPowerOff />
                    </button>
                </span>
            </Navbar>
            <Container>
                <h1>Incidents registreds: </h1>
                <br />
                <ul>
                    {listOfIncidents.map((item, index) => (
                        <li key={index}>
                            <strong>Incident: </strong>
                            <p>{item.title}</p>

                            <strong>Description</strong>
                            <p>{item.description}</p>

                            <strong>Value: </strong>
                            <p>{item.value} R$</p>

                            <button
                                onClick={() => handleDeleteIncident(item.id)}
                                type="button"
                            >
                                <FaTrashAlt />
                            </button>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    );
}

export default Main;
