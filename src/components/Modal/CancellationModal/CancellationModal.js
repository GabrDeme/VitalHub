import { Modal } from "react-native";
import { ButtonTitle, Title } from "../../Title/Style";
import { ButtonModal, CancellationButton, CancellationButtonTitle, ModalContent, ModalText, PatientModal } from "./Style";
import { LinkSemiBold } from "../../Link/Style";


import * as Notifications from "expo-notifications";

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {

    const handleNotifications = async () => {
        const { status } = await Notifications.getPermissionsAsync();

        if (status !== "granted") {
            alert("Você não deixou as notificações ativas!");
            return;
        }
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Má notícia 😥!",
                body: "A sua consulta foi cancelada!"
            },
            trigger: null
        });
    }
    
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <ButtonModal onPress={handleNotifications}>
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
