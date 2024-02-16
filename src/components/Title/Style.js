import styled from "styled-components";

export const Title = styled.Text`
    font-size: 20px;
    color: #33303e;
    font-family: 'MontserratAlternates_600SemiBold';
    margin-bottom: 5px;
`
export const SubTitle = styled(Title)`
    font-size: 16px;
    margin-bottom: -5px;
    margin-top: 20px;
    margin-left: 25px;
    align-self: flex-start;
`
export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: white;
    font-family: 'MontserratAlternates_700Bold';
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5px;
`
export const ButtonTitleGoogle = styled(ButtonTitle)`
    margin-left: 20px;
    color: #496BBA;
    justify-content: center;
`
export const WelcomeTitle = styled.Text`
    font-size: 14px;
    color: #4E4B59;
    font-family: 'Quicksand_500Medium';
    align-self: flex-start;
`
export const UserName = styled(Title)`
    font-size: 16px;
    color: #fbfbfb;
    margin-bottom: 35px;
`