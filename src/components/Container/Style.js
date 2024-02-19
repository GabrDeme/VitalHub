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
export const ContainerAlter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
    margin-top: 38px;
`