import styled from "styled-components"
import { SubTitle } from "../Title/Style"

export const Name = styled(SubTitle)`
    margin-left: 5px;
`
export const FieldContent = styled.View`
    width: ${props => `${props.fieldWidth}%`};
    margin-bottom: ${props => `${props.marginBottom}px`};
`