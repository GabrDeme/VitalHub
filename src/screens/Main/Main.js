import { ContentIcon, TextIcon } from "./Style";

//Importar o recurso do BOTTOM TAB 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator()

import { DoctorSchedule } from "../DoctorSchedule/DoctorSchedule";
import { Profile } from "../Profile/Profile";

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export const Main = () => {
    return (
        <BottomTab.Navigator
            //Definir a rota inicial
            initialRouteName="DoctorSchedule"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#ffffff", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "DoctorSchedule") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor = {focused ? "#ecf2ff" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color="#4e4b59"/>
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor = {focused ? "#ecf2ff" : "transparent"}
                            >
                                <FontAwesome5 name='user-circle' size={22} color="#4e4b59"/>
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >

            <BottomTab.Screen
                name="DoctorSchedule"
                component={DoctorSchedule}
            />


            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />
        </BottomTab.Navigator>
    );
}