import { Modal } from "react-native"
import { SmallerInput, ToScheduleModalContent, ToScheduleModalLabel, ToScheduleSizeModal } from "./Style"
import { ButtonTitle, Title } from "../../Title/Style"
import { Input } from "../../Input/Style"
import { EnterButton } from "../../Button/Style"
import { CancellationButton, CancellationButtonTitle } from "../CancellationModal/Style"
import { ContainerAlter } from "../../Container/Style"
import { ToScheduleAlterButton } from "../../AlterButton/ToScheduleAlterButton/ToScheduleAlterButton"

export const ToScheduleModal = ({
    visible,
    setShowModalToSchedule,
    ...rest
}) => {
    return (
        <Modal>
            <ToScheduleSizeModal>
                <ToScheduleModalContent>

                    <Title>Agendar Consulta</Title>

                    <ToScheduleModalLabel>Qual o nível da consulta</ToScheduleModalLabel>
                    <ContainerAlter>
                        {/* <ToScheduleAlterButton
                            textButton={'Rotina'}
                        />
                        <ToScheduleAlterButton
                            textButton={'Exame'}
                        />
                        <ToScheduleAlterButton
                            textButton={'Urgência'}
                        /> */}
                    </ContainerAlter>

                    <ToScheduleModalLabel>Informe a localização desejada</ToScheduleModalLabel>
                    <Input placeholder="Informe a localização"></Input>

                    <EnterButton>
                        <ButtonTitle
                        // onPress={() => navigation.navigate("DoctorSchedule")}
                        >Continuar</ButtonTitle>
                    </EnterButton>
                    <CancellationButton onPress={() => setShowModalToSchedule(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>

                </ToScheduleModalContent>
            </ToScheduleSizeModal>
        </Modal>
    );
}