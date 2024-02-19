import { AlterButton1, AlterButtonTitle } from "./Style"

export const AlterButton = ( {
    textButton,
    clickButton = false,
    onPress,
}) => { return (

        <AlterButton1 clickButton={clickButton} onPress={onPress}>
            <AlterButtonTitle clickButton={clickButton}>{textButton}</AlterButtonTitle>
        </AlterButton1>

);

};