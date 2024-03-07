import { Modal } from "react-native";
import { ButtonTitle, Title } from "../../Title/Style";
import { AnotherPatientPhoto } from "../../Logo/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText, PatientSizeModal } from "./Style";

export const AppointmentModal = ({
    situation,
    visible,
    setShowModalAppointment,
    navigation,
    name,
    age,
    ...rest
}) => {

    async function handleClose( screen ){
        await setShowModalAppointment(false)

        navigation.replace( screen ) 
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientSizeModal>
                <ModalContent>
                    <AnotherPatientPhoto source={require("../../../assets/AnotherPatientPhoto.png")} />

                    <Title>{name}</Title>

                    <ModalText>
                        {age} anos    email
                    </ModalText>

                    {situation !== "pendente" ? (
                        <ButtonModal onPress={ () => handleClose("Record") }>
                            <ButtonTitle>Inserir Prontuário</ButtonTitle>
                        </ButtonModal>
                    ) : (
                        <ButtonModal onPress={ () => handleClose("SeeLocation")}>
                            <ButtonTitle>Ver Local da Consulta</ButtonTitle>
                        </ButtonModal>
                    )}



                    <CancellationButton onPress={() => setShowModalAppointment(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>
                </ModalContent>
            </PatientSizeModal>
        </Modal>
    );
};