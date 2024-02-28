import { ContainerList, ProfileImage } from "../DoctorAppointmentCard/Style";
import { ContainerNameSpeciality, Name, Speciality } from "./Style";

export const DoctorCard = ({ navigation }) => {
    return (
        <ContainerList>

            <ProfileImage source={{ uri: "https://github.com/zAlves31.png" }} />

            <ContainerNameSpeciality>
                <Name>Jefferson</Name>
                <Speciality>Demartologa, Eletricista</Speciality>
            </ContainerNameSpeciality>

        </ContainerList>
    );
}