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
export const BigInput = styled(Input)`
    height: 121px;
    font-size: 16px;
    text-align-vertical: top;
`