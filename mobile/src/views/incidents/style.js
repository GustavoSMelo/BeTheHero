import styled from 'styled-components/native';

export const IncidentsContainer = styled.View`
    width: 80%;
    justify-content: center;
    margin-top: 30px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    padding: 15px;
    elevation: 10;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 7%;
    padding-top: 10%;
    padding-right: 7%;
    align-items: center;
`;

export const IntroducingTitle = styled.Text`
    margin-top: 10%;
    font-size: 20px;
    font-weight: bold;
    margin-left: 7%;
`;

export const IntroducingDescription = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #909090;
    margin-top: 5%;
    margin-left: 7%;
`;

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
`;

export const BoldText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const NormalText = styled.Text`
    font-size: 16px;
    color: #909090;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
`;

export const LinkContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextLink = styled.Text`
    font-weight: bold;
    color: #e02041;
`;

export const IconLink = styled.Text`
    color: #e02041;
`;
