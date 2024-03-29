import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native"
import { Container, ContainerInfo } from "../../components/Container/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { BiggerDataInput, ButtonInsertPhoto, Line, RedLinkBold, ViewInsertPhoto } from "./Style";
import { DataInput, Input } from "../../components/Input/Style";
import { EnterButton } from "../../components/Button/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonCard, ButtonText } from "../../components/AppointmentCard/DoctorAppointmentCard/Style";
import { OpenCamera } from "../../components/Camera/Camera";
import { useState } from "react";

export const Prescription = ({ navigation }) => {
    const [openCamera, setOpenCamera] = useState(false);
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
                <BiggerDataInput placeholder="Descrição"/>

                <SubTitle>Diagnóstico do Paciente</SubTitle>
                <DataInput placeholder="Diagnóstico" />

                <SubTitle>Prescrição Médica</SubTitle>
                <BiggerDataInput placeholder="Prescrição médica" />

                <EnterButton>
                    <ButtonTitle>Salvar</ButtonTitle>
                </EnterButton>

                <ViewInsertPhoto>

                    <ButtonInsertPhoto onPress={() => setOpenCamera(true)}>
                        <MaterialCommunityIcons name="camera-plus-outline" size={26} color="white" />
                        <ButtonTitle>Enviar</ButtonTitle>
                    </ButtonInsertPhoto>
                    <RedLinkBold>Cancelar</RedLinkBold>

                </ViewInsertPhoto>

                <OpenCamera
                    visibleCamera={openCamera}
                    onPressExit={() => setOpenCamera(false)}
                />

                <Line />

                <BiggerDataInput placeholder="Resultado do exame de sangue : " />

                <LinkSemiBold
                    onPress={() => navigation.navigate("PatientSchedule")}
                >Voltar</LinkSemiBold>

            </Container>
        </ScrollView>

    );
}