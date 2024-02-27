import styled from "styled-components";
import { ContainerList } from "../DoctorAppointmentCard/Style";

export const ContainerClinic = styled(ContainerList)`
    height: 85px;
`
export const ContainerUpperRow = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
`
export const ClinicsName = styled.Text`
    font-size: 16px;
    color: #33303E;
    font-family: 'MontserratAlternates_600SemiBold';
`
export const ClinicsGrade = styled.View`
    width: 45;
`
export const ClinicsGradeNumber = styled.Text`
    font-size: 14px;
    color: #F9A620;
    font-family: 'Quicksand_600SemiBold';
`
export const ContainerLowerRow = styled(ContainerUpperRow)`
`
export const ClinicsLocation = styled(ClinicsGrade)`
    color: #4E4B59;
`
export const OperationsTime = styled.View`
    padding: 4px 23px;
    gap: 6px;
    border-radius: 5px;
    background-color: "#e8fcfd";
`
export const OperationsTimeText = styled.Text`
    font-size: 14px;
    color: #49B3BA; 
    font-family: 'Quicksand_600SemiBold';
`