import styled, {css} from "styled-components"

export const SwitchButton = styled.TouchableHighlight`
    height: 43px;
    width: 102px;
    padding: 12px 14px;
    margin-top: -40px;
    border-radius: 5px;
    justify-content: center;
    gap: 10px;

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
    
    ${props => props.clickButton ? css`
        color: #fbfbfb;
    ` : css`
        color: #607ec5
    `}
`