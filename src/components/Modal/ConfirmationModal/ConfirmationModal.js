import { Modal } from "react-native";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalText } from "../AppointmentModal/Style";
import { ButtonTitle, Title } from "../../Title/Style";
import { PatientModal, ModalContent } from "../CancellationModal/Style";

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

                    <ButtonModal>
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