import styled from "styled-components";

export const EnterButton = styled.TouchableOpacity`
    height: 48px;
    width: 90%;
    padding: 12px 8px 9px 8px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #496BBA;
`
export const ExitButton = styled(EnterButton)`
    background-color: #ACABB7;
    width: 50%;
    margin-bottom: 30px;
`
export const GoogleButton = styled(EnterButton)`
    flex-direction: row;
    border: 2px solid #496BBA;
    color: #496BBA;
    background-color: white;
    margin-top: 15px;
    justify-content: center;
`
export const ReturnButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 100px;
    box-shadow: 10px 5px 5px black;
    position: absolute;
    margin-top: 80px;
    align-self: flex-start;
    margin-left: 15px;
`