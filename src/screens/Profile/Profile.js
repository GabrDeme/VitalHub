import { ScrollView } from "react-native";
import { Container, ContainerInfo } from "../../components/Container/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { StatusBar } from "expo-status-bar";
import { DataInput } from "../../components/Input/Style";
import { EnterButton } from "../../components/Button/Style";

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

                <DataInput placeholder="dd/mm/aaaa" keyboardType="numeric"></DataInput>
                <DataInput placeholder="000.000.000-00" keyboardType="numeric"></DataInput>
                <DataInput placeholder="R. Meio do Nada, 123"></DataInput>
                <DataInput placeholder="00000-00" keyboardType="numeric"></DataInput>
                <DataInput placeholder="Lugar Nenhum-SP"></DataInput>

                <EnterButton>                
                    <ButtonTitle>Salvar</ButtonTitle>
                </EnterButton>
                <EnterButton>                
                    <ButtonTitle>Editar</ButtonTitle>
                </EnterButton>
            </Container>
        </ScrollView>
    );
}