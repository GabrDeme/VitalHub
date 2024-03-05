import { ScrollView } from "react-native";
import { Container, ContainerInfo } from "../../components/Container/Style";
import { BigInput, BiggerInput, Input } from "../../components/Input/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Style";
import { StatusBar } from "expo-status-bar";
import { EnterButton } from "../../components/Button/Style";

export const Record = ({ navigation }) => {
    return (
        <ScrollView>

            <StatusBar />

            <Container>
                <PatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <Title>Nome do Indivíduo</Title>

                <ContainerInfo>

                    <RandomInfo>Idade do Indivíduo</RandomInfo>
                    <RandomInfo>Email do Indivíduo</RandomInfo>

                </ContainerInfo>

                <SubTitle>Descrição da Consulta</SubTitle>
                <BiggerInput placeholder="Descrição" />

                <SubTitle>Diagnóstico do Paciente</SubTitle>
                <Input placeholder="Diagnóstico" />

                <SubTitle>Prescrição Médica</SubTitle>
                <BiggerInput placeholder="Prescrição médica" />

                <EnterButton>
                    <ButtonTitle>Salvar</ButtonTitle>
                </EnterButton>
                <EnterButton>
                    <ButtonTitle>Editar</ButtonTitle>
                </EnterButton>

                <LinkSemiBold
                    onPress={() => navigation.navigate("Login")}
                >Cancelar</LinkSemiBold>

            </Container>
        </ScrollView>

    );
}