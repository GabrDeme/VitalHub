import styled from "styled-components";
import { ModalContent } from "../AppointmentModal/Style";

export const ToScheduleSizeModal = styled.View`
    flex: 1;
    align-items:center;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.6);
`
export const ToScheduleModalContent = styled(ModalContent)`
    width: 115%;
    height: 80%;
    border-radius: 0px;
    /* padding: 30px 30px 10px; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* background-color: #fff; */
    align-items:center;
`
export const ToScheduleModalLabel = styled.Text`
    font-size: 14px;
    color: black;
    text-align: flex-start;
    margin-top: 25px;
    margin-bottom: -8px;
    font-family: "Quicksand_600SemiBold";
`
export const ContainerVoid = styled.View`
    height: 28%;
`