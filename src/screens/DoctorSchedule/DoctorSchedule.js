import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, ContainerAlter } from "../../components/Container/Style";
import CalendarList from "../../components/Calendar/Calendar";
import { AlterButton } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/Title/Style";

export const DoctorSchedule = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <Header />
                <CalendarList />

                <ContainerAlter>
                    <AlterButton>
                        <ButtonTitle>Agendadas</ButtonTitle>
                    </AlterButton>
                    <AlterButton>
                        <ButtonTitle>Realizadas</ButtonTitle>
                    </AlterButton>
                    <AlterButton>
                        <ButtonTitle>Canceladas</ButtonTitle>
                    </AlterButton>
                </ContainerAlter>
            </Container>
        </ScrollView>
    );
}