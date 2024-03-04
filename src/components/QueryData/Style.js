import styled from "styled-components";
import { ClinicsLocation, ClinicsName } from "../AppointmentCard/ClinicCard/Style";

export const ContainerQueryData = styled.View`
    margin-left: 5px;
    margin-bottom: 15px;
    flex-direction: column;
    align-self: flex-start;
`
export const QueryDataTitle = styled(ClinicsName)`
    font-family: 'Quicksand_600SemiBold';
`
export const QueryDataText = styled(ClinicsLocation)`
    font-family: 'Quicksand_500Medium';
`