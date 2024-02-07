import { Button, Image, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Container } from "../../components/Container/Style";
import { Google, Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Link/Style";
import { ButtonEnter, ButtonGoogle } from "../../components/Button/Style";
import { COntentAccount, ContentAccount, TextAccount } from "./Style";

export const Login = ({ login }) => {
    return (
        <Container>
            <Logo source={require("../../assets/SecondLogo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input>Usuário ou E-mail</Input>
            <Input>Senha</Input>

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <ButtonEnter>
                <ButtonTitle>Entrar</ButtonTitle>
            </ButtonEnter>

            <ButtonGoogle>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>
        </Container>
    );
}
