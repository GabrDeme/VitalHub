import { ScrollView } from "react-native";
import { Container, ContainerInfo } from "../../components/Container/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { StatusBar } from "expo-status-bar";

export const Profile = ({ navigation }) => {
    return (

        <ScrollView>

            <StatusBar />

            <Container>
                <PatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <Title>Nome do Indíduo</Title>

                <ContainerInfo>

                    <RandomInfo>Email do Invíduo</RandomInfo>

                </ContainerInfo>
            </Container>
        </ScrollView>
    );
}