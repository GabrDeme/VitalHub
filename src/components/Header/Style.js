import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
    width: 100%;
    height: 144px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
export const ContainerBoxUser = styled.SafeAreaView`
    width: 163px;
    height: 60px;
    flex-direction: row;
    align-self: flex-start;
    margin-left: 20px; 
`
export const ContainerDataUser = styled.SafeAreaView`
    z-index: 10;
    position: absolute;
    justify-content: center;
    margin-top: 60px;
    margin-left: 65px;
`
export const SmallPatientPhoto = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 5px;
    margin-top: 50px;
`
export const WelcomeTitle = styled.Text`
    font-size: 14px;
    color: #4E4B59;
    font-family: 'Quicksand_500Medium';
    align-self: flex-start;
`
export const UserName = styled.Text`
    font-size: 16px;
    color: #fbfbfb;
    margin-bottom: 35px;       
    font-family: 'MontserratAlternates_600SemiBold';
`
export const Bell = styled.Image`
    height: 25px;
    width: 25px;
    margin-top: 10px;
    margin-left: 340px;
`