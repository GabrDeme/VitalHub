import { EnterButton, ReturnButton } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo, Return } from "../../components/Logo/Style";
import { RandomText } from "../../components/Texts/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";

export const NewPassword = ({ navigation }) => {
    return (
        <Container>

            <ReturnButton
                onPress={() => navigation.navigate("Login")}
            >
                <Return source={require("../../assets/Close.png")} />
            </ReturnButton>

            <Logo source={require("../../assets/PrimaryLogo.png")} />

            <Title>Redefinir Senha</Title>

            <RandomText>Insira e confirme a sua nova senha</RandomText>

            <Input placeholder = "Nova Senha"/>
            <Input placeholder = "Confirmar Nova Senha"/>

            <EnterButton
                // onPress={() => navigation.navigate("Home")}
            >
                <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
            </EnterButton>

        </Container>
    );
}