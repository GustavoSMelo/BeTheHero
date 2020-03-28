import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Image, Linking } from 'react-native';
import {
    Header,
    BoldText,
    IncidentsContainer,
    NormalText,
    TextContainer,
    TitleContainer,
    DescriptionContainer,
    ButtonContainer,
    Button,
    ButtonText,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import api from '../../api';

function Details(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const { incident } = route.params;
    const message = `Hi, i am here because i want to help in incident ${incident.title} with value of R$ ${incident.value} `;
    const [infoOng, setInfoOng] = useState([]);

    useEffect(() => {
        async function getDatabyAPI() {
            const response = await api.get('/ong/show');

            await setInfoOng(response.data);
        }
    }, []);

    function handlerReturnToIncidents() {
        return navigation.navigate('Incident');
    }

    function sendWhatsapp() {
        Linking.openURL(
            `whatsapp://send?phone=${infoOng.whatsapp}&text=${message}`
        );
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Hero of incident: incident',
            recipients: [infoOng.email],
            body: message,
        });
    }

    return (
        <>
            <Header>
                <Image source={Logo} />
                <TouchableOpacity onPress={handlerReturnToIncidents}>
                    <Icon name="arrow-left" color="#e02041" size={30} />
                </TouchableOpacity>
            </Header>

            <IncidentsContainer scrollIndicatorInsets={false}>
                <TitleContainer>
                    <BoldText>Incident:</BoldText>
                    <BoldText>ONG:{'\n'}</BoldText>
                </TitleContainer>
                <TextContainer>
                    <NormalText>
                        {'\n'}
                        {incident.title}
                    </NormalText>
                    <NormalText>
                        {'\n'}
                        {infoOng.name}
                    </NormalText>
                </TextContainer>

                <TitleContainer>
                    <BoldText>Description</BoldText>
                </TitleContainer>
                <DescriptionContainer>
                    {incident.description}
                </DescriptionContainer>
                <TitleContainer>
                    <BoldText>Value:</BoldText>
                </TitleContainer>
                <TextContainer>
                    <NormalText>R$ {incident.value}</NormalText>
                </TextContainer>

                <TitleContainer>
                    <BoldText>Save the day</BoldText>
                </TitleContainer>

                <TitleContainer>
                    <BoldText>Be the hero of this incident</BoldText>
                </TitleContainer>

                <TitleContainer>
                    <NormalText>Choose a method of contact</NormalText>
                </TitleContainer>

                <ButtonContainer>
                    <Button onPress={sendWhatsapp}>
                        <ButtonText>
                            <Icon name="whatsapp" size={20} /> Whatsapp
                        </ButtonText>
                    </Button>
                    <Button onPress={sendMail}>
                        <ButtonText>
                            <Icon name="envelope-o" size={20} /> Email
                        </ButtonText>
                    </Button>
                </ButtonContainer>
            </IncidentsContainer>
        </>
    );
}

export default Details;
