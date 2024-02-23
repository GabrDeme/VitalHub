import { StatusBar } from "react-native";
import { Bell, ContainerBoxUser, ContainerDataUser, ContainerHeader, SmallPatientPhoto, UserName, WelcomeTitle } from "./Style";

export const Header = () => {
    return (
        <ContainerHeader>

            <StatusBar />

            <ContainerBoxUser>

                <SmallPatientPhoto source={{ uri: "https://github.com/EduardoPasqualetti.png" }} />

                <ContainerDataUser>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserName>Dr. Francisco</UserName>
                </ContainerDataUser>
                
            </ContainerBoxUser>
            <Bell source={require("../../assets/Bell.png")} />


        </ContainerHeader>
    );
}