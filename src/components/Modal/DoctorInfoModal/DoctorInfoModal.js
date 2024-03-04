import { Modal } from "react-native";
import { PatientSizeModal } from "../AppointmentModal/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText } from "../CancellationModal/Style";
import { AnotherPatientPhoto } from "../../Logo/Style";
import { ButtonTitle, Title } from "../../Title/Style";

export const DoctorInfoModal = ({
    visible, 
    setShowModalDoctorInfo, 
    name, 
    age,
    ...rest
}) =>{

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientSizeModal>
                <ModalContent>
                    <AnotherPatientPhoto source={{ uri: "https://github.com/EduardoPasqualetti.png" }} />

                    <Title>{name}</Title>

                    <ModalText>
                        Clínica Geral    CRM-15286
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                    </ButtonModal>

                    <CancellationButton onPress={() => setShowModalDoctorInfo(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientSizeModal>
        </Modal>
    );
};