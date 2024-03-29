import { EnterButton, ReturnButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo, Return } from "../../components/Logo/Style";
import { RandomText } from "../../components/Texts/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const ForgottenPassword = ({ navigation }) => {
    return (
        <Container>

            <ReturnButton
                onPress={() => navigation.navigate("Login")}
            >
                <Return source={require("../../assets/Return.png")} />
            </ReturnButton>

            <Logo source={require("../../assets/PrimaryLogo.png")} />

            <Title>Recuperar Senha</Title>

            <RandomText>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</RandomText>

            <Input placeholder = "Usuário ou E-mail"/>

            <EnterButton
                onPress={() => navigation.navigate("EmailsCode")}
            >
                <ButtonTitle>Continuar</ButtonTitle>
            </EnterButton>

        </Container>
    );
}