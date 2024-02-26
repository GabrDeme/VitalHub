import styled, {css} from "styled-components"
import { AlterButtonTitle, SwitchButton } from "../Style"

export const ToScheduleSwitchButton = styled(SwitchButton)`
    ${props => props.clickButton ? css`
        background-color: #34898F ;
    ` : css`
        background-color: transparent;
        border: 2px solid #60BFC5;
    `}
`
export const ToScheduleAlterButtonTitle = styled(AlterButtonTitle)`
    ${props => props.clickButton ? css`
        color: #fbfbfb;
    ` : css`
        color: #34898F;
    `}
`