import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, ContainerAlter, Stethoscope } from "../../components/Container/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AlterButton } from "../../components/AlterButton/AlterButton";
import { ListComponent } from "../../components/List/List";
import { DoctorAppointmentCard } from "../../components/AppointmentCard/DoctorAppointmentCard/DoctorAppointmentCard";
import { CancellationModal } from "../../components/Modal/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/Modal/AppointmentModal/AppointmentModal";
import { FontAwesome6 } from '@expo/vector-icons';


import { useState } from "react";
import { ToScheduleModal } from "../../components/Modal/ToScheduleModal/ToScheduleModal";
import { DoctorInfoModal } from "../../components/Modal/DoctorInfoModal/DoctorInfoModal";

const Consultas = [
    { id: 1, name: "Eduardo", age: 18, hour: '12:00', situation: "pendente", type: "Rotina" },
    { id: 2, name: "Gustavo", age: 18, hour: '12:30', situation: "realizadas", type: "Rotina" },
    { id: 3, name: "Marcelo", age: 19, hour: '13:00', situation: "canceladas", type: "Urgência" },
    { id: 4, name: "Marcio", age: 29, hour: '14:00', situation: "pendente", type: "Rotina" },
    { id: 5, name: "Jao", age: 19, hour: '18:00', situation: "realizadas", type: "Urgência" },
    { id: 6, name: "Gabriel", age: 16, hour: '13:30', situation: "pendente", type: "Rotina" }
]

export const DoctorSchedule = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalDoctorInfo, setShowModalDoctorInfo] = useState(false)
    const [showModalToSchedule, setShowModalToSchedule] = useState(false)

    const [profile, setProfile] = useState("Paciente");

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
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situation && (
                        <DoctorAppointmentCard
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
            {profile === "Paciente" && (

                <Stethoscope
                    onPress={() => setShowModalToSchedule(true)}
                >
                    <FontAwesome6 name="stethoscope" size={32} color="white" />
                </Stethoscope>
            )}
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


        </Container>

    );
}