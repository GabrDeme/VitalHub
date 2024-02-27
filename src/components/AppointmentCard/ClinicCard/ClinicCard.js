import { ClinicsGrade, ClinicsGradeNumber, ClinicsLocation, ClinicsName, ContainerClinic, ContainerLowerRow, ContainerUpperRow, OperationsTime, OperationsTimeText } from "./Style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ClinicCard = ({ }) => {
    return (

        <ContainerClinic>

            <ContainerUpperRow>
                <ClinicsName></ClinicsName>

                <ClinicsGrade>
                    <AntDesign name="star" size={20} color="#F9A620" />
                    <ClinicsGradeNumber></ClinicsGradeNumber>
                </ClinicsGrade>
            </ContainerUpperRow>

            <ContainerLowerRow>
                <ClinicsLocation></ClinicsLocation>
                <OperationsTime>
                    <MaterialCommunityIcons name="calendar-outline" size={11} color="black" />
                    <OperationsTimeText></OperationsTimeText>
                </OperationsTime>
            </ContainerLowerRow>

        </ContainerClinic>

    );
}