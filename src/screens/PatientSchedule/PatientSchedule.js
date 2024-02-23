import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, ContainerAlter, Stethoscope } from "../../components/Container/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AlterButton } from "../../components/AlterButton/AlterButton";
import { ListComponent } from "../../components/List/List";
import { PatientAppointmentCard } from "../../components/AppointmentCard/PatientAppointmentCard/PatientAppointmentCard";
import { CancellationModal } from "../../components/Modal/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/Modal/AppointmentModal/AppointmentModal";
import { FontAwesome6 } from '@expo/vector-icons';

import { useState } from "react";

const ConsultasPaciente = [
    { id: 1, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "pendente", type: "Rotina" },
    { id: 2, name: "Dr. Marcos", age: 30, hour: '12:30', situation: "realizadas", type: "Urgência" },
    { id: 3, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "canceladas", type: "Rotina" }
]

export const PatientSchedule = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return (

        <Container>
            <Header />
            <CalendarList />

            <ContainerAlter>
                <AlterButton
                    textButton={'Pendente'}
                    clickButton={statusList === 'pendente'}
                    onPress={() => setStatusList('pendente')}
                />
                <AlterButton
                    textButton={'Realizadas'}
                    clickButton={statusList === 'realizadas'}
                    onPress={() => setStatusList('realizadas')}
                />

                <AlterButton
                    textButton={'Canceladas'}
                    clickButton={statusList === 'canceladas'}
                    onPress={() => setStatusList('canceladas')}
                />
            </ContainerAlter>

            <ListComponent
                data={ConsultasPaciente}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situation && (
                        <PatientAppointmentCard
                            name={item.name}
                            age={item.age}
                            hour={item.hour}
                            situation={item.situation}
                            type={item.type}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />
                    )
                }
            />

            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />
            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                navigation={navigation}
            />

            <Stethoscope>
                <FontAwesome6 name="stethoscope" size={32} color="white" />
            </Stethoscope>

        </Container>

    );
}