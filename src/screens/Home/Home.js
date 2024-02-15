import { ScrollView } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Style";

export const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <Header/>
            </Container>
        </ScrollView>
    );
}