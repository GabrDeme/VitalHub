import { StatusBar } from "react-native";
import { Bell, ContainerBoxUser, ContainerDataUser, ContainerHeader, SmallPatientPhoto, UserName, WelcomeTitle } from "./Style";
import { useState } from "react";

export const Header = ({ navigation }) => {
    const [profile, setProfile] = useState("Medico");

    return (        
        <ContainerHeader>

            <StatusBar />

            <ContainerBoxUser onPress={() => navigation.navigate("Profile")}>

                {
                    profile == "Paciente" ? (
                        <SmallPatientPhoto source={{ uri: "https://github.com/eduardocostaprofessor.png" }} />

                    ) : (
                        <SmallPatientPhoto source={{ uri: "https://github.com/Carlos-Augusto-Roque.png" }} />
                    )
                }

                <ContainerDataUser>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserName>Hamilton</UserName>
                </ContainerDataUser>

            </ContainerBoxUser>
            <Bell source={require("../../assets/Bell.png")} />


        </ContainerHeader>
    );
}