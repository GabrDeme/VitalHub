import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native"
import { Container, ContainerInfo } from "../../components/Container/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { BiggerDataInput, ButtonInsertPhoto, Line, ViewInsertPhoto } from "./Style";
import { DataInput, Input } from "../../components/Input/Style";
import { EnterButton } from "../../components/Button/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCard, ButtonText } from "../../components/AppointmentCard/DoctorAppointmentCard/Style";

export const Prescription = ({ }) => {
    return (

        <ScrollView>

            <StatusBar />

            <Container>
                <PatientPhoto source={{ uri: "https://github.com/EduardoPasqualetti.png" }} />

                <Title>Nome do Médico</Title>

                <ContainerInfo>

                    <RandomInfo>Clínica Geral</RandomInfo>
                    <RandomInfo>CRM-15286</RandomInfo>

                </ContainerInfo>

                <SubTitle>Descrição da Consulta</SubTitle>
                <BiggerDataInput placeholder="Descrição" />

                <SubTitle>Diagnóstico do Paciente</SubTitle>
                <DataInput placeholder="Diagnóstico" />

                <SubTitle>Prescrição Médica</SubTitle>
                <BiggerDataInput placeholder="Prescrição médica" />

                <EnterButton>
                    <ButtonTitle>Salvar</ButtonTitle>
                </EnterButton>

                <ViewInsertPhoto>

                    <ButtonInsertPhoto>
                        <MaterialCommunityIcons name="camera-plus-outline" size={26} color="white" />
                        <ButtonTitle>Enviar</ButtonTitle>
                    </ButtonInsertPhoto>
                    <ButtonCard>
                        <ButtonText>Cancelar</ButtonText>
                    </ButtonCard>

                </ViewInsertPhoto>

                <Line> </Line>

                <BiggerDataInput placeholder="Resultado do exame de sangue : " />

                <LinkSemiBold
                    onPress={() => navigation.navigate("Login")}
                >Voltar</LinkSemiBold>

            </Container>
        </ScrollView>

    );
}