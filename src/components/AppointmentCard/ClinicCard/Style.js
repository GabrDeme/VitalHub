import styled from "styled-components";
import { ClockCard, ContainerList } from "../DoctorAppointmentCard/Style";

export const ContainerClinic = styled(ContainerList)`
    height: 85px;
    width: 100%;
    flex-direction: column;
`
export const ContainerUpperRow = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ClinicsName = styled.Text`
    font-size: 16px;
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`
export const ClinicsGrade = styled.View`
    width: 45px;
`
export const ClinicsGradeNumber = styled.Text`
    font-size: 14px;
    color: #F9A620;
    font-family: 'Quicksand_600SemiBold';
`
export const ContainerLowerRow = styled(ContainerUpperRow)`
    justify-content: space-between;
`
export const ClinicsLocation = styled(ClinicsGradeNumber)`
    color: #4E4B59;
`
export const OperationsTime = styled(ClockCard)`
    color: "black";
`
export const OperationsTimeText = styled.Text`
    font-size: 14px;
    color: #49B3BA; 
    font-family: 'Quicksand_600SemiBold';
`
export const ContainerBetween = styled.View`
    margin-top: 45px;
    margin-bottom: 35px;
`
export const ContainerContinue = styled.View`
    flex-direction: flex-end
`