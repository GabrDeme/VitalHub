import { Modal } from "react-native";
import { ButtonTitle, Title } from "../../Title/Style";
import { AnotherPatientPhoto } from "../../Logo/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText, PatientSizeModal } from "./Style";

export const AppointmentModal = ({
    visible, 
    setShowModalAppointment, 
    name, 
    age,
    ...rest
}) =>{
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientSizeModal>
                <ModalContent>
                    <AnotherPatientPhoto source={require("../../../assets/AnotherPatientPhoto.png")} />

                    <Title>{name}</Title>

                    <ModalText>
                        {age} anos    email
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <CancellationButton onPress={() => setShowModalAppointment(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientSizeModal>
        </Modal>
    );
};