import { Button, View } from "react-native"

//                     props
//                       |
export const Navigation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 20 }}>

            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            {/* <Button
                title="Médico"
                onPress={() => navigation.navigate("DoctorSchedule")}
            /> */}

            <Button
                title="Paciente"
                onPress={() => { navigation.navigate("PatientSchedule") }}
            />

            {/* <Button
                title="Prontuário"
                onPress={() => navigation.navigate("Record")}
            />

            <Button
                title="Perfil Paciente"
                onPress={() => navigation.navigate("Profile")}
            /> */}

            {/*         <Button
                title="Selecionar Clínica"
                onPress={() => navigation.navigate("ClinicSelect")}
            /> 

            <Button
                title="Selecionar Data"
                onPress={() => navigation.navigate("DateSelect")}
            />  */}

            <Button
                title="Prescrição do Médico"
                onPress={() => navigation.navigate("Prescription")}
            />

        </View>
    );
}
