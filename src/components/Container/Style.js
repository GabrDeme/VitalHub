import styled from "styled-components";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`
export const ContainerInput = styled.SafeAreaView`
    flex-direction: row;
    gap: 20px;
`
export const ContainerInfo = styled.SafeAreaView`
    flex-direction: row;
`
export const ContainerAlter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
    margin-top: 38px;
`
export const Stethoscope = styled.View`
    height: 60px;
    width: 60px;
    align-self: flex-end;
    margin-bottom: 14px;
    margin-right: 21px;
    background-color: #49B3BA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`