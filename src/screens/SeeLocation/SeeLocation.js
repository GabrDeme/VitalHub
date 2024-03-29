import { BoxInput } from "../../components/BoxInput/BoxInput";
import { Container, ContainerInfo } from "../../components/Container/Style";
import { DataInput } from "../../components/Input/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { AnotherPatientPhoto } from "../../components/Logo/Style";
import Maps from "../../components/Maps/Maps";
import { RandomInfo } from "../../components/Texts/Style";
import { SubTitle, Title } from "../../components/Title/Style";
import { BigImage, ViewFormat } from "./Style";

export const SeeLocation = ({ navigation }) => {

    return (
        <Container>
            {/* <BigImage source={require("../../assets/Location.png")} /> */}

            <Maps/>

            <Title>Clínica Natureh</Title>
            <ContainerInfo>

                <RandomInfo>São Paulo, SP</RandomInfo>

            </ContainerInfo>

            <SubTitle>Endereço</SubTitle>
            <DataInput placeholder="R. Meio do Nada, 123"></DataInput>

            <ViewFormat>
                <BoxInput
                    textLabel={'Número'}
                    placeholder={'578'}
                    fieldWidth={45}
                    keyboardType={"numeric"}
                />
                <BoxInput
                    textLabel={'Bairro'}
                    placeholder={'Moema-SP'}
                    fieldWidth={45}
                />
            </ViewFormat>

            <LinkSemiBold
                onPress={() => navigation.navigate("PatientSchedule")}
            >Voltar</LinkSemiBold>

        </Container>

    );

}