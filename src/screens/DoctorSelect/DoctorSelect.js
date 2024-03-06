import { ScrollView } from "react-native";
import { ClinicCard } from "../../components/AppointmentCard/ClinicCard/ClinicCard";
import { ContainerBetween } from "../../components/AppointmentCard/ClinicCard/Style";
import { DoctorCard } from "../../components/AppointmentCard/DoctorCard/DoctorCard";
import { EnterButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { CancellationButton, CancellationButtonTitle } from "../../components/Modal/CancellationModal/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { BottomButtom } from "../ClinicSelect/Style";

export const DoctorSelect = ({ navigation }) => {
    return (
        <Container>
            <ContainerBetween>
                <Title>Selecionar Médico</Title>
            </ContainerBetween>

            <ScrollView>
                <DoctorCard />
            </ScrollView>

            <BottomButtom
                onPress={() => navigation.navigate("DateSelect")}
            >
                <ButtonTitle>Continuar</ButtonTitle>
            </BottomButtom>

            <CancellationButton
                onPress={() => navigation.navigate("ClinicSelect")}
            >
                <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
            </CancellationButton>
        </Container>
    );
}