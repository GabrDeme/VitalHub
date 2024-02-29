import { ClinicCard } from "../../components/AppointmentCard/ClinicCard/ClinicCard";
import { ContainerBetween } from "../../components/AppointmentCard/ClinicCard/Style";
import { DoctorCard } from "../../components/AppointmentCard/DoctorCard/DoctorCard";
import { EnterButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { CancellationButton, CancellationButtonTitle } from "../../components/Modal/CancellationModal/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const DoctorSelect = ({ navigation }) => {
    return(
        <Container>
            <ContainerBetween>
                <Title>Selecionar Médico</Title>
            </ContainerBetween>
            
            <DoctorCard/>

            <EnterButton
             onPress={() => navigation.navigate("CalendarSelect")}
            >
                <ButtonTitle>Continuar</ButtonTitle>
            </EnterButton>

            <CancellationButton
                onPress={() => navigation.navigate("ClinicSelect")}
            >
                <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
            </CancellationButton>
        </Container>
    );
}