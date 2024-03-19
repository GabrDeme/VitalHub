import { useState } from 'react';
import { ButtonCard, ButtonText, ClockCard, ContainerList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from './Style';
import { AntDesign } from '@expo/vector-icons';

export const DoctorAppointmentCard = ({
    situation = "pendente",
    onPressCancel,
    onPressAppointment,
    navigation,
    onPressPrescription,
    name,
    age,
    hour,
    type
}) => {

    const [profile, setProfile] = useState("Medico");

    return (
        <ContainerList onPress={onPressAppointment}>

            {
                profile == "Paciente" ? (
                    <ProfileImage source={{ uri: "https://github.com/Carlos-Augusto-Roque.png" }} />

                ) : (
                    <ProfileImage source={{ uri: "https://github.com/eduardocostaprofessor.png" }} />
                )
            }

            <ContentCard>
                <DataProfileCard>

                    <ProfileName>{name}</ProfileName>

                    <ProfileData>
                        <TextAge>{age} anos</TextAge>
                        <TextBold>{type}</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard situation={situation}>
                        <AntDesign name="clockcircle" size={14} marginTop={2} color={situation == "pendente" ? "#49B3BA" : "#4E4B59"} />
                        <TextBold>{hour}</TextBold>
                    </ClockCard>

                    {
                        situation == "canceladas" ? (
                            <>
                            </>
                        ) : situation == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situation={situation}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressPrescription}>
                                <ButtonText situation={situation}>Ver Prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }

                </ViewRow>
            </ContentCard>

        </ContainerList>
    );
}