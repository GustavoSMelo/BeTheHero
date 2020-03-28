import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 7%;
    padding-top: 10%;
    padding-right: 7%;
    align-items: center;
`;

export const IncidentsContainer = styled.ScrollView`
    width: 80%;
    margin-top: 30px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    padding: 15px;
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
    color: #505050;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
`;

export const DescriptionContainer = styled.Text`
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    font-size: 16px;
    color: #505050;
    line-height: 20px;
`;

export const ButtonContainer = styled.View`
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
    background-color: #e02041;
    padding: 20px;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
