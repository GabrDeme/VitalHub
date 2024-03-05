import styled from "styled-components";
import { DataInput } from "../../components/Input/Style";

export const ViewInsertPhoto = styled.View`
    height: 60px;
    width: 100%; 
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
`
export const Line = styled.View`
    width: 100%;
    height: 2px;
    background-color: #8C8A97;
    margin-top: 40px;
`
export const ButtonInsertPhoto = styled.TouchableOpacity`
    width: 50%;
    height: 100%;
    background-color: #49B3BA;
    border-radius: 7px;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

export const BiggerDataInput = styled(DataInput)`
    height: 121px;
    font-size: 16px;
    text-align-vertical: top;
`