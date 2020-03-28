import React from 'react';
import { View, Image, Text } from 'react-native';
import {
    IncidentsContainer,
    Header,
    IntroducingTitle,
    IntroducingDescription,
    TitleContainer,
    BoldText,
    NormalText,
    TextContainer,
    LinkContainer,
    IconLink,
    TextLink,
} from './style';
import Logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

function Incidents() {
    return (
        <>
            <Header>
                <Image source={Logo} />
                <Text style={{ color: '#707070' }}>
                    Total de:{' '}
                    <Text style={{ fontWeight: 'bold' }}>0 casos</Text>
                </Text>
            </Header>
            <IntroducingTitle>Welcome!</IntroducingTitle>
            <IntroducingDescription>
                Choose one of incidents below and save the day!
            </IntroducingDescription>

            <IncidentsContainer>
                <TitleContainer>
                    <BoldText>Incident:</BoldText>
                    <BoldText>ONG:{'\n'}</BoldText>
                </TitleContainer>
                <TextContainer>
                    <NormalText>{'\n'}This is a description</NormalText>
                    <NormalText>{'\n'}APAD</NormalText>
                </TextContainer>

                <TitleContainer>
                    <BoldText>Value:</BoldText>
                </TitleContainer>
                <TextContainer>
                    <NormalText>100.00 R$</NormalText>
                </TextContainer>

                <LinkContainer>
                    <TextLink>Show more details</TextLink>
                    <IconLink>
                        <Icon name="arrow-right" size={20} />
                    </IconLink>
                </LinkContainer>
            </IncidentsContainer>
        </>
    );
}

export default Incidents;
