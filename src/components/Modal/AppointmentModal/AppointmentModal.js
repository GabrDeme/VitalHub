import { Modal } from "react-native";
import { ButtonTitle, Title } from "../../Title/Style";
import { AnotherPatientPhoto } from "../../Logo/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText, PatientModal } from "./Style";

export const AppointmentCard = ({
    visible, 
    setShowModalCancel, 
    name, 
    age,
    ...rest
}) =>{
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <AnotherPatientPhoto source={require("../../../assets/AnotherPatientPhoto.png")} />

                    <Title>{name}</Title>

                    <ModalText>
                        {age} anos    email
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <CancellationButton onPress={() => setShowModalAppointmentl(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};