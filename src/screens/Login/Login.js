import { AntDesign } from '@expo/vector-icons';
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Link/Style";
import { EnterButton, GoogleButton } from "../../components/Button/Style";
import { ContentAccount, TextAccount } from "./Style";




export const Login = ({ navigation }) => {

    async function Login() {
        navigation.navigate("Main")
    }
    
    return (
        <Container>
            <Logo source={require("../../assets/PrimaryLogo.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />

            <LinkMedium

                title="ForgottenPassword"
                onPress={() => navigation.navigate("ForgottenPassword")}

            >Esqueceu sua senha?</LinkMedium>

            <EnterButton onPress={() => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </EnterButton>

            <GoogleButton onPress={() => navigation.navigate("PatientSchedule")}>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>
                    Entrar com Google
                </ButtonTitleGoogle>
            </GoogleButton>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold
                    onPress={() => navigation.navigate("Register")}
                >Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>
        </Container>
    );
}
