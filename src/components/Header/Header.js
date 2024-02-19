import { StatusBar } from "react-native";
import { ContainerBoxUser, ContainerHeader, ContainerDataUser } from "../Container/Style";
import { SmallPatientPhoto } from "../Logo/Style";
import { UserName, WelcomeTitle } from "../Title/Style";

export const Header = () => {
    return (
        <ContainerHeader>

            <StatusBar />

            <ContainerBoxUser>

                <SmallPatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <ContainerDataUser>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserName>Dr. Carlos</UserName>
                </ContainerDataUser> 

            </ContainerBoxUser>

            {/* <MaterialIcons name="notifications" size={25} color="white"/> */}

        </ContainerHeader>
    );
}