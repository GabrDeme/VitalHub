import { ButtonCard2, ButtonText2, ClockCard2, ContainerList2, ContentCard2, DataProfileCard2, ProfileData2, ProfileImage2, ProfileName2, TextAge2, TextBold2, ViewRow2 } from "./Style";

import { AntDesign } from '@expo/vector-icons';

export const PatientAppointmentCard = ({
    situation = "pendente",
    onPressCancel,
    onPressAppointment,
    name, 
    age,
    hour,
    type
}) => {
    return (
        <ContainerList2>

            <ProfileImage2 source={{ uri: "https://github.com/EduardoPasqualetti.png" }} />

            <ContentCard2>
                <DataProfileCard2>

                    <ProfileName2>{name}</ProfileName2>

                    <ProfileData2>
                        <TextAge2>{age} anos</TextAge2>
                        <TextBold2>{type}</TextBold2>
                    </ProfileData2>

                </DataProfileCard2>

                <ViewRow2>
                    <ClockCard2 situation={situation}>
                        <AntDesign name="clockcircle" size={14} marginTop={2} color= {situation == "pendente" ? "#49B3BA" : "#4E4B59"}/>
                        <TextBold2>{hour}</TextBold2>
                    </ClockCard2>

                    {
                        situation == "canceladas" ? (
                            <>
                            </>
                        ) : situation == "pendente" ? (
                            <ButtonCard2 onPress={onPressCancel}>
                                <ButtonText2 situation={situation}>Cancelar</ButtonText2>
                            </ButtonCard2>
                        ) : (
                            <ButtonCard2 onPress={onPressAppointment}>
                                <ButtonText2 situation={situation}>Ver Prontuário</ButtonText2>
                            </ButtonCard2>
                        ) 
                    }

                </ViewRow2>
            </ContentCard2>

        </ContainerList2>
    );
}