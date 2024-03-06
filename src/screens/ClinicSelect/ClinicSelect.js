import { ScrollView } from "react-native";
import { ClinicCard } from "../../components/AppointmentCard/ClinicCard/ClinicCard";
import { ContainerBetween, ContainerContinue } from "../../components/AppointmentCard/ClinicCard/Style";
import { EnterButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { CancellationButton, CancellationButtonTitle } from "../../components/Modal/CancellationModal/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { BottomButtom } from "./Style";

const Clinicas = [
    { id: 1, name: "Clínica Natureh", location: "São Paulo, SP", time: "seg-sex" },
    { id: 2, name: "Clinica Villa Lobos", location: "Taboão, SP", time: "seg-sáb" },
    { id: 3, name: "Clínica Senai", location: "Centro de SCS, SP", time: "seg-dom" }
]

export const ClinicSelect = ({ navigation }) => {
    return (

        <Container>
            <ContainerBetween>
                <Title>Selecionar Clínica</Title>
            </ContainerBetween>
            <ScrollView>
                <ClinicCard />
            </ScrollView>

            <BottomButtom
                onPress={() => navigation.navigate("DoctorSelect")}
            >
                <ButtonTitle>Continuar</ButtonTitle>
            </BottomButtom>

            <CancellationButton
                onPress={() => navigation.navigate("PatientSchedule")}
            >
                <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
            </CancellationButton>
        </Container>
    );
}