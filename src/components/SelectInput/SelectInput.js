import { View, StyleSheet } from "react-native";
import { ToScheduleModalLabel } from "../Modal/ToScheduleModal/Style";
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from "react-native-select-dropdown";
import { ToScheduleContainerInput, ToScheduleLabel } from "./Style";

export default function SelectInput({ defaultText = '', handleSelectedFn = null, labelText = '' }) {
    return (
        <View>
            <ToScheduleContainerInput>
                <ToScheduleLabel>{labelText}</ToScheduleLabel>
                <SelectDropdown
                    data={['10:00', '12:00', '13:00', '14:00', '15:00', '16:00', ]}
                    defaultButtonText={defaultText}
                    onSelect={(selectedItem, index) => {
                        handleSelectedFn(index);
                    }}
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonText}
                    renderDropdownIcon={() => <Ionicons name="caret-down" size={24} color="#34898F" />}
                />
            </ToScheduleContainerInput>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: '#60BFC5',
        borderWidth: 2,
        width: '100%',
        height: 54,
        paddingLeft: 16,
        paddingRight: 16
    },
    buttonText: {
        color: '#34898F',
        fontSize: 16,
        fontFamily: 'MontserratAlternates_600SemiBold',
        textAlign: 'left'
    }
});