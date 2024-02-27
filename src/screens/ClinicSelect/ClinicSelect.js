import { ClinicCard } from "../../components/AppointmentCard/ClinicCard/ClinicCard";
import { Container } from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";

const Clinicas = [
    { id: 1, name: "Clínica Natureh", location: "São Paulo, SP", time: "seg-sex" },
    { id: 2, name: "Clinica Villa Lobos", location: "Taboão, SP", time: "seg-sáb" },
    { id: 3, name: "Clínica Senai", location: "Centro de SCS, SP", time: "seg-dom" }
]

export const ClinicSelect = ({ navigation }) => {
    return (

        <Container>

            <Title>Selecionar Clínica</Title>

                <ClinicCard/>

            <EnterButton
            //  onPress={() => navigation.navigate("DoctorSchedule")}
            >
                <ButtonTitle>Continuar</ButtonTitle>
            </EnterButton>

            <CancellationButton >
                <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
            </CancellationButton>

        </Container>
    );
}