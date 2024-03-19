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
    { id: 1, name: "Cachorro", age: 19, hour: '13:00', situation: "canceladas", type: "Urgência", profile: "Medico" },
    { id: 2, name: "Marmita", age: 19, hour: '18:00', situation: "realizadas", type: "Urgência", profile: "Medico" },
    { id: 3, name: "Gabriel", age: 16, hour: '13:30', situation: "pendente", type: "Rotina", profile: "Medico" },

    // { id: 4, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "pendente", type: "Rotina", profile: "Paciente" },
    // { id: 5, name: "Dr. Marcos", age: 30, hour: '12:30', situation: "realizadas", type: "Urgência", profile: "Paciente" },
    // { id: 6, name: "Dr. Francisco", age: 48, hour: '14:00', situation: "canceladas", type: "Rotina", profile: "Paciente" }
]

export const DoctorSchedule = ({ navigation }) => {

    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalDoctorInfo, setShowModalDoctorInfo] = useState(false)
    const [showModalToSchedule, setShowModalToSchedule] = useState(false)

    const [profile, setProfile] = useState("Medico");

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
                            onPressPrescription={() => navigation.replace('Prescription')}
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
