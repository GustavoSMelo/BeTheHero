import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, FlatList } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../api';

function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [TotalOfIncidents, setTotalOfIncidents] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function getDataByAPI() {
        if (loading) {
            return;
        }

        if (TotalOfIncidents > 0 && incidents.length === TotalOfIncidents) {
            return;
        }

        setLoading(true);
        const response = await api.get(`/incidents?page=${page}`);
        setTotalOfIncidents(response.headers.totalcount);
        setIncidents([...incidents, ...response.data.incidents]);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        getDataByAPI();
    }, []);

    function NavigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    return (
        <>
            <StatusBar hidden={true} />
            <Header>
                <Image source={Logo} />
                <Text style={{ color: '#707070' }}>
                    Total of:{' '}
                    <Text style={{ fontWeight: 'bold' }}>
                        {TotalOfIncidents} incidents
                    </Text>
                </Text>
            </Header>
            <IntroducingTitle>Welcome!</IntroducingTitle>
            <IntroducingDescription>
                Choose one of incidents below and save the day!
            </IntroducingDescription>

            <FlatList
                data={incidents}
                onEndReached={getDataByAPI}
                onEndReachedThreshold={0.2}
                keyExtractor={incidents => incidents.id}
                renderItem={({ item: Incident }) => (
                    <IncidentsContainer>
                        <TitleContainer>
                            <BoldText>Incident:</BoldText>
                            <BoldText>ONG:{'\n'}</BoldText>
                        </TitleContainer>
                        <TextContainer>
                            <NormalText>
                                {'\n'}
                                {Incident.title}
                            </NormalText>
                            <NormalText>
                                {'\n'}
                                {Incident.id_ong}
                            </NormalText>
                        </TextContainer>

                        <TitleContainer>
                            <BoldText>Value:</BoldText>
                        </TitleContainer>
                        <TextContainer>
                            <NormalText>R$ {Incident.value}</NormalText>
                        </TextContainer>

                        <LinkContainer
                            onPress={() => NavigateToDetail(Incident)}
                        >
                            <TextLink>Show more details</TextLink>
                            <IconLink>
                                <Icon name="arrow-right" size={20} />
                            </IconLink>
                        </LinkContainer>
                    </IncidentsContainer>
                )}
            />
        </>
    );
}

export default Incidents;
