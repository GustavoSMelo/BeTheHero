import React, { useState } from 'react';
import { Container, ContainerError, ContainerSuccess } from './style';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import api from '../../api';

function Registre() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    const [status4user, setStatus4User] = useState(<></>);

    async function handlerButtonClick(e) {
        e.preventDefault();

        try {
            const info = await api.post('/ongs', {
                name,
                email,
                whatsapp,
                city,
                uf,
            });
            return await setStatus4User(
                <ContainerSuccess>
                    Success to register your ong <br />
                    Your ID is: {info.data.id} <br />
                    Please, don't lose this ID
                </ContainerSuccess>
            );
        } catch (err) {
            return await setStatus4User(
                <ContainerError>Error to Create a new User</ContainerError>
            );
        }
    }

    return (
        <>
            {status4user}
            <Container>
                <aside>
                    <figure>
                        <img src={Logo} alt="BeTheHero Logo" />
                    </figure>
                    <h1>Registre</h1>
                    <p>
                        Make your registre, enter in plataform and help another
                        <br />
                        peoples to find the incidents of your ONG
                    </p>
                    <Link className="link" to="/">
                        <span>
                            <FaLongArrowAltLeft />
                        </span>{' '}
                        Return to page of login
                    </Link>
                </aside>
                <form>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Name of ONG"
                        required="required"
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        required="required"
                    />
                    <input
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        type="text"
                        placeholder="Whatsapp"
                        required="required"
                    />
                    <input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        type="text"
                        placeholder="City"
                        required="required"
                    />
                    <input
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                        type="text"
                        placeholder="UF"
                        required="required"
                    />
                    <button type="button" onClick={handlerButtonClick}>
                        Registre
                    </button>
                </form>
            </Container>
        </>
    );
}

export default Registre;
