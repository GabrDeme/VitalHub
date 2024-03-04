import styled from "styled-components";
import { Title } from "../../Title/Style";

export const ContainerList2 = styled.View`
    width: 90%;
    margin-bottom: 12px;
    padding: 10px 10px;
    height: 100px;
    border-radius: 5px;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
`
export const ProfileImage2 = styled.Image`
    height: 100%;
    width: 25%;
    border-radius: 5px;
`
export const ContentCard2 = styled.View`
    width: 70%;
`
export const DataProfileCard2 = styled.View`
    gap: 0px;
    margin-left: 10px;
`
export const ProfileName2 = styled(Title)`
    font-size: 16px;
`
export const ProfileData2 = styled.View`
    flex-direction: row;
    gap: 16px;
    margin-bottom: 11px;
`
export const TextAge2 = styled.Text`
    font-size: 14px;
    color: #8c8a97;
    font-family: 'Quicksand_400Regular';
`
export const TextBold2 = styled(TextAge2)`
    font-family: 'Quicksand_600SemiBold';
    color: ${(props) => props.situation == "pendente" ? "#49B3BA" : "#4E4B59"};
`
export const ViewRow2 = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
`
export const ClockCard2 = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    gap: 6px;
    border-radius: 5px;
    background-color: ${(props) => props.situation == "pendente" ? "#e8fcfd" : "#f1f0f5"};
`
export const AntDesign2 = styled.Image`
`
export const ButtonCard2 = styled.TouchableOpacity`
`
export const ButtonText2 = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 12px;
    color: ${(props) => props.situation == "pendente" ? "#c81d25" : "#344f8f"};
`