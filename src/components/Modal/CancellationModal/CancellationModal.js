import { Modal } from "react-native";
import { ButtonTitle, Title } from "../../Title/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText, PatientModal } from "./Style";
import { LinkSemiBold } from "../../Link/Style";

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <CancellationButton onPress={() => setShowModalCancel(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};