import { Modal } from "react-native";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalText } from "../AppointmentModal/Style";
import { ButtonTitle, Title } from "../../Title/Style";
import { PatientModal, ModalContent } from "../CancellationModal/Style";
import { QueryData } from "../../QueryData/QueryData";
import { PatientSchedule } from "../../../screens/PatientSchedule/PatientSchedule";

export const ConfirmationModal = ({
    navigation,
    visible,
    setShowConfirmation,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                    Consulte os dados selecionados para a sua consulta
                    </ModalText>

                    <QueryData
                        title={'Data da Consulta'}
                        text={'1 de Novembro de 2023'}
                    />
                    <QueryData
                        title={'Médico(a) da consulta'}
                        text={'Dra Alessandra'}
                    />
                    <QueryData
                        title={'Local da consulta'}
                        text={'São Paulo, SP'}
                    />
                    <QueryData
                        title={'Tipo da consulta'}
                        text={'Rotina'}
                    />

                    <ButtonModal onPress={() => navigation.navigate("PatientSchedule")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <CancellationButton onPress={() => setShowConfirmation(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
}