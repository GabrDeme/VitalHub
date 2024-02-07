import { ButtonEnter } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { RandomText } from "../../components/Texts/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const ForgottenPassword = ({ forgottenPassword }) => {
    return (
        <Container>
            <Logo source={require("../../assets/SecondLogo.png")} />
            <Title>Recuperar Senha</Title>
            <RandomText>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</RandomText>
            <Input>Usuário ou E-mail</Input>
            <ButtonEnter>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonEnter>
        </Container>

    );
}