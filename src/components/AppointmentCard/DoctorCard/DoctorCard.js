import { ContainerList, ProfileImage } from "../DoctorAppointmentCard/Style";
import { ContainerNameSpeciality, DoctorContainerList, Name, Speciality } from "./Style";

export const DoctorCard = ({ navigation }) => {
    return (
        <DoctorContainerList>

            <ProfileImage source={{ uri: "https://github.com/zAlves31.png" }} />

            <ContainerNameSpeciality>
                <Name>Jefferson</Name>
                <Speciality>Demartologa, Eletricista</Speciality>
            </ContainerNameSpeciality>

        </DoctorContainerList>
    );
}