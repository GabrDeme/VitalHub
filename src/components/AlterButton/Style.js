import styled, {css} from "styled-components"

export const AlterButton1 = styled.TouchableHighlight`
    height: 39px;
    width: 100px;
    padding: 12px 14px;
    margin-top: 5px;
    border-radius: 5px;
    justify-content: center;

    ${props => props.clickButton ? css`
        background-color: #496bba ;
    ` : css`
        background-color: transparent;
        border: 2px solid #607ec5;
    `}
`
export const AlterButtonTitle = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';
    text-align: center;
    justify-content: center;
    /* margin-bottom: -5px; */
    
    ${props => props.clickButton ? css`
        color: #fbfbfb;
    ` : css`
        color: #607ec5
    `}
`