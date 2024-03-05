import { ScrollView } from "react-native";
import { Container, ContainerCep, ContainerInfo, SmallerContainerCep } from "../../components/Container/Style";
import { PatientPhoto } from "../../components/Logo/Style";
import { ButtonTitle, SubTitle, Title } from "../../components/Title/Style";
import { RandomInfo } from "../../components/Texts/Style";
import { StatusBar } from "expo-status-bar";
import { DataInput, LowerDataInput } from "../../components/Input/Style";
import { EnterButton, ExitButton } from "../../components/Button/Style";
import { ViewFormat } from "../SeeLocation/Style";
import { BoxInput } from "../../components/BoxInput/BoxInput";

export const Profile = ({ navigation }) => {
    return (

        <ScrollView>

            <StatusBar />

            <Container>
                <PatientPhoto source={require("../../assets/PatientPhoto.png")} />

                <Title>Nome do Indíduo</Title>

                <ContainerInfo>

                    <RandomInfo>Email do Invíduo</RandomInfo>

                </ContainerInfo>

                <SubTitle>Data de nascimento</SubTitle>
                <DataInput placeholder="dd/mm/aaaa" keyboardType="numeric"></DataInput>

                <SubTitle>CPF</SubTitle>
                <DataInput placeholder="123********" keyboardType="numeric"></DataInput>

                <SubTitle>Endereço</SubTitle>
                <DataInput placeholder="R. Meio do Nada, 123"></DataInput>

                <ViewFormat>
                    <BoxInput
                        textLabel={'Cep'}
                        placeholder={'00000-00'}
                        fieldWidth={45}
                        keyboardType={"numeric"}
                    />
                    <BoxInput
                        textLabel={'Cidade'}
                        placeholder={'Lugar Nenhum-SP'}
                        fieldWidth={45}
                    />
                </ViewFormat>

                <EnterButton>
                    <ButtonTitle>Salvar</ButtonTitle>
                </EnterButton>

                <EnterButton>
                    <ButtonTitle>Editar</ButtonTitle>
                </EnterButton>

                <ExitButton>
                    <ButtonTitle onPress={() => { navigation.navigate("Navigation") }}>SAIR DO APP </ButtonTitle>
                </ExitButton>
            </Container>
        </ScrollView>
    );
}