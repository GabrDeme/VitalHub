import styled from "styled-components";

export const ContainerCamera = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`
export const FlipCamera = styled.View`
    flex: 1;
    background-color: transparent;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`
export const FlipButton = styled.TouchableOpacity`
    padding: 15px;
`
export const FlipText = styled.Text`
    font-size: 20px;
    color: '#fff';
    margin-bottom: 20px;
`
export const CaptureButton = styled.TouchableOpacity`
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    background-color: white;

    align-items: center;
    justify-content: center;
`
export const ImageModal = styled(ContainerCamera)`
    padding: 30px;
`
export const InsideButtons = styled(CaptureButton)`
    margin: 0px;
    background-color: transparent;
`
export const ContainerInsideButtons = styled.View`
    flex-direction: row;
`