import { EnterButton, ReturnButton } from "../../components/Button/Style";
import { Container, ContainerInput } from "../../components/Container/Style";
import { NumberInput } from "../../components/Input/Style";
import { LinkEmail, LinkSemiBold } from "../../components/Link/Style";
import { Logo, Return } from "../../components/Logo/Style";
import { RandomText } from "../../components/Texts/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const EmailsCode = ({ navigation }) => {
    return (
        <Container>

            <ReturnButton
                onPress={() => navigation.navigate("Login")}
            >
                <Return source={require("../../assets/Close.png")} />
            </ReturnButton>

            <Logo source={require("../../assets/PrimaryLogo.png")} />

            <Title>Verifique seu e-mail</Title>

            <RandomText>
                Digite o código de 4 dígitos enviado para <LinkEmail>
                    username@email.com</LinkEmail>
            </RandomText>

            <ContainerInput>
                <NumberInput placeholder="0" keyboardType = "numeric" maxLength = {1}/>
                <NumberInput placeholder="0" keyboardType = "numeric" maxLength = {1}/>
                <NumberInput placeholder="0" keyboardType = "numeric" maxLength = {1}/>
                <NumberInput placeholder="0" keyboardType = "numeric" maxLength = {1}/>
            </ContainerInput>

            <EnterButton
            onPress={() => navigation.navigate("NewPassword")}
            >
                <ButtonTitle>Entrar</ButtonTitle>
            </EnterButton>

            <LinkSemiBold>Reenviar Código</LinkSemiBold>

        </Container>
    );
}