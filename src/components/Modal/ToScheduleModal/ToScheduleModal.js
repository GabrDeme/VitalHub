import { Modal } from "react-native"
import { ContainerVoid, SmallerInput, ToScheduleModalContent, ToScheduleModalLabel, ToScheduleSizeModal } from "./Style"
import { ButtonTitle, Title } from "../../Title/Style"
import { Input } from "../../Input/Style"
import { EnterButton } from "../../Button/Style"
import { CancellationButton, CancellationButtonTitle } from "../CancellationModal/Style"
import { ContainerAlter } from "../../Container/Style"
import { ToScheduleAlterButton } from "../../AlterButton/ToScheduleAlterButton/ToScheduleAlterButton"
import { useState } from "react"

export const ToScheduleModal = ({
    visible,
    setShowModalToSchedule,
    ...rest
}) => {

    const [statusList, setStatusList] = useState(null);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ToScheduleSizeModal>
                <ToScheduleModalContent>

                    <Title>Agendar Consulta</Title>

                    <ToScheduleModalLabel>Qual o nível da consulta</ToScheduleModalLabel>
                    <ContainerAlter>
                        <ToScheduleAlterButton
                            textButton={'Rotina'}
                            clickButton={statusList === 'rotina'}
                            onPress={() => setStatusList('rotina')}
                        />
                        <ToScheduleAlterButton
                            textButton={'Exame'}
                            clickButton={statusList === 'exame'}
                            onPress={() => setStatusList('exame')}
                        />
                        <ToScheduleAlterButton
                            textButton={'Urgência'}
                            clickButton={statusList === 'urgencia'}
                            onPress={() => setStatusList('urgencia')}
                        />
                    </ContainerAlter>

                    <ToScheduleModalLabel>Informe a localização desejada</ToScheduleModalLabel>
                    <Input placeholder="Informe a localização"></Input>

                    <ContainerVoid />

                    <EnterButton
                    //  onPress={() => navigation.navigate("DoctorSchedule")}
                    >
                        <ButtonTitle>Continuar</ButtonTitle>
                    </EnterButton>
                    <CancellationButton onPress={() => setShowModalToSchedule(false)}>
                        <CancellationButtonTitle>Cancelar</CancellationButtonTitle>
                    </CancellationButton>

                </ToScheduleModalContent>
            </ToScheduleSizeModal>
        </Modal>
    );
}