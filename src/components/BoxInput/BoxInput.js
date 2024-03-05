import { DataInput } from "../Input/Style";
import { SubTitle } from "../Title/Style";
import { FieldContent, Name } from "./Style";

export const BoxInput = ({
    fieldWidth = 100,
    textLabel,
    placeholder,
    fieldValue,
    fieldHeight = 60,
    editable = true,
    multiline = false,
    keyboardType,
 }) => {
    return (
        <FieldContent fieldWidth={fieldWidth} >
        <Name>{textLabel}</Name>
        <DataInput placeholder={placeholder} value={fieldValue} editable={editable}
        fieldHeight={fieldHeight} multiline={multiline} keyboardType={keyboardType}/>
        </FieldContent >
        );
}