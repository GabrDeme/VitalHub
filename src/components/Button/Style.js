import styled from "styled-components";

export const ButtonEnter = styled.TouchableOpacity`
    height: 48px;
    width: 90%;
    padding: 12px 8px 9px 8px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #496BBA;
`
export const ButtonGoogle = styled(ButtonEnter)`
    flex-direction: row;
    border: 2px solid #496BBA;
    color: #496BBA;
    background-color: white;
    margin-top: 15px;
    justify-content: center;
`