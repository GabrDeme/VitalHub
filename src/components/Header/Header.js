import { StatusBar } from "react-native";
import { BoxUser, ContainerHeader, DataUser } from "../Container/Style";
import { SmallPatientPhoto } from "../Logo/Style";
import { UserName, WelcomeTitle } from "../Title/Style";

export const Header = () => {
    return (
        <ContainerHeader>

            <StatusBar />

            <BoxUser>

                <SmallPatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <DataUser>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserName>Dr. Carlos</UserName>
                </DataUser> 

            </BoxUser>

            {/* <MaterialIcons name="notifications" size={25} color="white"/> */}

        </ContainerHeader>
    );
}