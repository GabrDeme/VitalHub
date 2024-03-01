import { useState } from "react";
import { EnterButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { CancellationButton, CancellationButtonTitle } from "../../components/Modal/CancellationModal/Style";
import FullCalender from "../../components/ToScheduleCalendar/ToScheduleCalendar";
import SelectInput from "../../components/SelectInput/SelectInput";
import { ContainerBetween } from "../../components/AppointmentCard/ClinicCard/Style";
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal/ConfirmationModal";

export const DateSelect = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const [showConfirmation, setShowConfirmation] = useState(false);

    return (
        <Container>
            <ContainerBetween>
                <Title>Selecionar Data</Title>
            </ContainerBetween>
            <FullCalender
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate}
            />

            <SelectInput
                labelText='Selecione um horário disponível'
                defaultText='Selecionar horário'
                handleSelectedFn={setSelectedTime}
            />

            <EnterButton
                onPress={() => setShowConfirmation(true)}
            >
                <ButtonTitle>
                    Confirmar
                </ButtonTitle>
            </EnterButton>

            <CancellationButton onPress={() => navigation.navigate("DoctorSelect")}>
                <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
            </CancellationButton>

            <ConfirmationModal
                visible={showConfirmation}
                setShowModalSummary={setShowConfirmation}
                navigation={navigation}
            />

        </Container>
    );
}