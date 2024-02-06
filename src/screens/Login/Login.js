import { Image, Text, View } from "react-native";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/Link/Style";

export const Login = ({ login }) => {
    return (
        <Container>
            <Logo source={require("../../assets/SecondLogo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input>Usuário ou Email</Input>
            <Input>Senha</Input>

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}
        </Container>
    );
}
