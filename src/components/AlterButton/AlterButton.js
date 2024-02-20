import { SwitchButton, AlterButtonTitle } from "./Style"

export const AlterButton = ( {
    textButton,
    clickButton = false,
    onPress,
}) => { return (

        <SwitchButton clickButton={clickButton} onPress={onPress}>
            <AlterButtonTitle clickButton={clickButton}>{textButton}</AlterButtonTitle>
        </SwitchButton>

);

};