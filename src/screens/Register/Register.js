import { EnterButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkSemiBold } from "../../components/Link/Style";
import { Logo } from "../../components/Logo/Style";
import { RandomText } from "../../components/Texts/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const Register = ({ navigation }) => {
    return (
        <Container> 

            <Logo source={require("../../assets/PrimaryLogo.png")} />

            <Title>Criar Conta</Title>
            
            <RandomText>Insira seu endereço de e-mail e senha para realizar seu cadastro.</RandomText>

            <Input placeholder = "Usuário ou E-mail"></Input>
            <Input placeholder = "Nova Senha"/>
            <Input placeholder = "Confirmar Nova Senha"/>

            <EnterButton
                // onPress={() => navigation.navigate("Home")}
            >
                <ButtonTitle>Cadastrar</ButtonTitle>
            </EnterButton>

            <LinkSemiBold
                onPress={() => navigation.navigate("Login")}
            >Cancelar</LinkSemiBold>

        </Container>
    );
}