import { ScrollView } from "react-native";
import { Container, ContainerInfo } from "../../components/Container/Style";
import { BigInput, Input } from "../../components/Input/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { SubTitle, Title } from "../../components/Title/Style";
import { StatusBar } from "expo-status-bar";

export const Record = ({ navigation }) => {
    return (
        <ScrollView>

            <StatusBar />

            <Container>
                <PatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <Title>Nome do Invíduo</Title>

                <ContainerInfo>

                    <RandomInfo>Idade do Invíduo</RandomInfo>
                    <RandomInfo>Email do Invíduo</RandomInfo>

                </ContainerInfo>

                <SubTitle>Descrição da Consulta</SubTitle>
                <BigInput placeholder="Descrição" />

                <SubTitle>Diagnóstico do Paciente</SubTitle>
                <Input placeholder="Diagnóstico" />

                <SubTitle>Prescrição Médica</SubTitle>
                <BigInput placeholder="Prescrição médica" />

                <LinkSemiBold
                    onPress={() => navigation.navigate("Login")}
                >Cancelar</LinkSemiBold>
            </Container>
        </ScrollView>

    );
}