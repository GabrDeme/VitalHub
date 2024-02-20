import { StatusBar } from "react-native";
import { Bell, ContainerBoxUser, ContainerDataUser, ContainerHeader, SmallPatientPhoto, UserName, WelcomeTitle } from "./Style";

export const Header = () => {
    return (
        <ContainerHeader>

            <StatusBar />

            <ContainerBoxUser>

                <SmallPatientPhoto source={{ uri: "https://github.com/GustavoPasqualetti" }}/>

                <ContainerDataUser>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserName>Dr. Francisco</UserName>
                </ContainerDataUser>

                <Bell source={require("../../assets/Bell.png")} />

            </ContainerBoxUser>



        </ContainerHeader>
    );
}