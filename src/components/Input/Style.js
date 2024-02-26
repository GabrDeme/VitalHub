import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898f'
})`
    height: 53px;
    width: 90%;
    padding: 15px;
    margin-top: 15px;
    border: 2px solid #49b3ba;
    border-radius: 5px;
    
    color: #34898f;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
`
export const NumberInput = styled(Input)`
    height: 62px;
    width: 62px;

    font-size: 52px;
    border: 2px solid #77CACF;
    font-family: 'Quicksand_500Medium';
    padding: 0px 18px;
`
export const BiggerInput = styled(Input)`
    height: 121px;
    font-size: 16px;
    text-align-vertical: top;
`
export const DataInput = styled(Input).attrs({
    placeholderTextColor: '#33303E'
})`
    border: 0px solid #33303E;
    background-color: #F5F3F3;
    color: #33303E;
    font-family: 'MontserratAlternates_500Medium';
`
export const LowerDataInput = styled(DataInput)`
    width: 35%;
`