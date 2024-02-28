import { ClinicsGrade, ClinicsGradeNumber, ClinicsLocation, ClinicsName, ContainerClinic, ContainerLowerRow, ContainerUpperRow, OperationsTime, OperationsTimeText } from "./Style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ClinicCard = ({ }) => {
    return (

        <ContainerClinic>

            <ContainerUpperRow>
                <ClinicsName>Cridnska</ClinicsName>

                <ClinicsGrade>
                    <AntDesign name="star" size={20} color="#F9A620" />
                    <ClinicsGradeNumber>2.5</ClinicsGradeNumber>
                </ClinicsGrade>
            </ContainerUpperRow>

            <ContainerLowerRow>
                <ClinicsLocation>sao paulo, sp</ClinicsLocation>
                <OperationsTime>
                    <MaterialCommunityIcons name="calendar-outline" size={15} marginTop={3} color="#49B3BA" />
                    <OperationsTimeText>seg-sex</OperationsTimeText>
                </OperationsTime>
            </ContainerLowerRow>

        </ContainerClinic>

    );
}