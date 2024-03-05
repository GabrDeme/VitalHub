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

            screenOptions={ ({ route }) => ({
                tabBarStyle: { backgroundColor: "#ffffff", height : 80, paddingTop: 10 },
                tabBarActiveBackgroundColor : "transparent",
                tabBarShowLabel : false,
                headerShown : false,

                tabBarIcon : ({ focused }) => {
                    if ( route.name === "Home" )
                    {
                        return (
                            <>
                            </>
                        )
                    } else{

                    }
                }
            })}
        >
            
            <BottomTab.Screen
                name = "DoctorSchedule"
                component = { DoctorSchedule }
            />

        
            <BottomTab.Screen
                name = "Profile"
                component = { Profile }
            />
        </BottomTab.Navigator>
    );
}