import { ScrollView, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, ContainerAlter, Stethoscope } from "../../components/Container/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AlterButton } from "../../components/AlterButton/AlterButton";
import { ListComponent } from "../../components/List/List";
import { PatientAppointmentCard } from "../../components/AppointmentCard/PatientAppointmentCard/PatientAppointmentCard";
import { CancellationModal } from "../../components/Modal/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/Modal/AppointmentModal/AppointmentModal";
import { FontAwesome6 } from '@expo/vector-icons';
import { ToScheduleModal } from "../../components/Modal/ToScheduleModal/ToScheduleModal";
import { DoctorInfoModal } from "../../components/Modal/DoctorInfoModal/DoctorInfoModal";


import { useState } from "react";

const ConsultasPaciente = [
    { id: 1, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "pendente", type: "Rotina" },
    { id: 2, name: "Dr. Marcos", age: 30, hour: '12:30', situation: "realizadas", type: "Urgência" },
    { id: 3, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "canceladas", type: "Rotina" }
]

export const PatientSchedule = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")
    const [showModalDoctorInfo, setShowModalDoctorInfo] = useState(false)
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalToSchedule, setShowModalToSchedule] = useState(false)

    return (

        <Container>
            <Header navigation={navigation} />
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
                        <TouchableOpacity onPress={() => { setShowModalDoctorInfo(true) }}>
                            <PatientAppointmentCard
                                name={item.name}
                                age={item.age}
                                hour={item.hour}
                                situation={item.situation}
                                navigation={navigation}
                                type={item.type}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}
                            />
                        </TouchableOpacity>
                    )
                }
            />

            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />
            <AppointmentModal
                situation="pendente"
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                navigation={navigation}
            />
            <ToScheduleModal
                navigation={navigation}
                visible={showModalToSchedule}
                onPressToSchedule={() => setShowModalToSchedule(true)}
                setShowModalToSchedule={setShowModalToSchedule}
            />
            <DoctorInfoModal
                navigation={navigation}
                visible={showModalDoctorInfo}
                setShowModalDoctorInfo={setShowModalDoctorInfo}
            />

            <Stethoscope
                onPress={() => setShowModalToSchedule(true)}
            >
                <FontAwesome6 name="stethoscope" size={32} color="white" />
            </Stethoscope>

        </Container>

    );
}