import { ContainerQueryData, QueryDataText, QueryDataTitle } from "./Style";

export const QueryData = ( {
    title,
    text
}) => { return (

        <ContainerQueryData>
            <QueryDataTitle>{title}</QueryDataTitle>
            <QueryDataText>{text}</QueryDataText>
        </ContainerQueryData>

);

};