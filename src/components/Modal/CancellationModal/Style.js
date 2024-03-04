import styled from "styled-components";
import { EnterButton } from "../../Button/Style";

export const CancellationButton = styled(EnterButton)`
    background-color: transparent;
    border: none;
    margin-bottom: 15px;
`
export const CancellationButtonTitle = styled.Text`
    text-align: center;
    font-size: 14px;
    color: #344F8F;
    text-decoration: underline;
    font-family: 'MontserratAlternates_600SemiBold';
`
export const PatientModal = styled.View`
    flex: 1;
    align-items:center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
`
export const ModalContent = styled.View`
    width: 90%;
    padding: 30px 30px 10px;
    border-radius: 10px;
    background-color: #fff;
    align-items:center;
`
export const ModalText = styled.Text`
    width: 270px;
    font-size: 16px;
    color: #5f5c6b;
    line-height: 22px;
    text-align: center;
    margin-top: 10px;
    font-family: "Quicksand_500Medium";
`
export const ButtonModal = styled(EnterButton)`
    width: 100%;
`