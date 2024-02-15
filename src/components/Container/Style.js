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