import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, ContainerAlter } from "../../components/Container/Style";
import CalendarList from "../../components/Calendar/Calendar";
import { AlterButton } from "../../components/AlterButton/AlterButton";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

import { useState } from "react";

const Consultas = [
    { id: 1, nome: "Eduardo", situacao: "pendente" },
    { id: 2, nome: "Gustavo", situacao: "realizado" },
    { id: 3, nome: "Marcelo", situacao: "cancelado" },
    { id: 4, nome: "Marcio", situacao: "cancelado" },
    { id: 5, nome: "Jao", situacao: "realizado" },
    { id: 6, nome: "Gabriel", situacao: "pendente" }
]

export const DoctorSchedule = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")

    return (
        <ScrollView>
            <Container>
                <Header />
                <CalendarList />

                <ContainerAlter>
                    <AlterButton
                        textButton={'Pendente'}
                        clickButton={statusList === 'pendente'}
                        onPress={() => setStatusList('pendente')}
                    >
                    </AlterButton>
                    <AlterButton
                        textButton={'Realizadas'}
                        clickButton={statusList === 'realizadas'}
                        onPress={() => setStatusList('realizadas')}>
                    </AlterButton>
                    <AlterButton
                        textButton={'Canceladas'}
                        clickButton={statusList === 'canceladas'}
                        onPress={() => setStatusList('canceladas')}>
                    </AlterButton>
                </ContainerAlter>

                <ListComponent
                    data={Consultas}
                    keyExtractor={(item) => item.id}

                    renderItem={({item}) =>
                        statusList == item.situacao && (
                            <AppointmentCard
                                situacao={item.situacao}
                            />
                        )
                    }
                />             

            </Container>
        </ScrollView>
    );
}