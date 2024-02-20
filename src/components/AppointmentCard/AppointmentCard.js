import { ButtonCard, ButtonText, ClockCard, ContainerList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style";
import { AntDesign } from '@expo/vector-icons';

export const AppointmentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment,
}) => {
    return (
        <ContainerList>

            <ProfileImage source={{ uri: "https://github.com/ojuaum1.png" }} />

            <ContentCard>
                <DataProfileCard>

                    <ProfileName>João</ProfileName>

                    <ProfileData>
                        <TextAge>45</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color="black" />
                        <TextBold>14:00</TextBold>
                    </ClockCard>

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) 
                    }

                </ViewRow>
            </ContentCard>

        </ContainerList>
    );
}