import { ToScheduleSwitchButton, ToScheduleAlterButtonTitle } from "./Style"
export const ToScheduleAlterButton = ( {
    textButton,
    clickButton = false,
    onPress,
}) => { return (

        <ToScheduleSwitchButton clickButton={clickButton} onPress={onPress}>
            <ToScheduleAlterButtonTitle clickButton={clickButton}>{textButton}</ToScheduleAlterButtonTitle>
        </ToScheduleSwitchButton>

);

};