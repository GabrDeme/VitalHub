import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
    color: #8c8a97;
    margin-top: 10px;
    text-decoration: underline;
    align-self: flex-start;
    margin-left: 20px;
`

export const LinkBold = styled(LinkMedium)`
    font-size: 16px;
    font-family: 'MontserratAlternates_700Bold';
    color: #4D659D;
`

export const LinkEmail = styled(LinkBold)`
    font-size: 18px;
    font-family: 'Quicksand_500Medium';
`
export const LinkSemiBold = styled(LinkBold)`
    align-self: center;
    justify-content: center;
    margin-left: 0px;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const LinkCancel = styled(LinkSemiBold)`
    margin-bottom: 30px;
`