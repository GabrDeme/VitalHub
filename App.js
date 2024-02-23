import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Login } from './src/screens/Login/Login';
import { ForgottenPassword } from './src/screens/ForgottenPassword/ForgottenPassword';
import { EmailsCode } from './src/screens/EmailsCode/EmailsCode';
import { NewPassword } from './src/screens/NewPassword/NewPassword';
import { Register } from './src/screens/Register/Register';
import { Record } from './src/screens/Record/Record';
import { Profile } from './src/screens/Profile/Profile';
import { DoctorSchedule } from './src/screens/DoctorSchedule/DoctorSchedule';
import { PatientSchedule } from './src/screens/PatientSchedule/PatientSchedule';

const Stack = createNativeStackNavigator();

import { useFonts, Quicksand_500Medium, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates"


export default function App() {

  const [ fontsLoaded, fontsError ] = useFonts({
    Quicksand_500Medium,
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if(!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
        
          name='Navegacao'
          component={Navigation}
          options={{title: 'Navegacao'}}
          
          />

        <Stack.Screen
        
          name='Login'
          component={Login}
          options={{title: 'Login'}}
          
          />

        <Stack.Screen
        
          name='ForgottenPassword'
          component={ForgottenPassword}
          options={{title: 'Esqueceu a senha'}}
          
          />

        <Stack.Screen
        
          name='EmailsCode'
          component={ EmailsCode }
          options={{title: 'Codigo do Email'}}
          
          />

        <Stack.Screen
        
          name='NewPassword'
          component={ NewPassword }
          options={{title: 'Redefinir Senha'}}
          
          />

        <Stack.Screen
        
          name='Register'
          component={ Register }
          options={{title: 'Cadastrar Conta'}}
          
          />

        <Stack.Screen
        
          name='Record'
          component={ Record }
          options={{title: 'Prontuário Médico'}}
          
          />

        <Stack.Screen
        
          name='Profile'
          component={ Profile }
          options={{title: 'Perfil do Paciente'}}
          
          />

        <Stack.Screen
        
          name='DoctorSchedule'
          component={ DoctorSchedule }
          options={{title: 'ConsultasMedico'}}
          
          />

        <Stack.Screen
        
          name='PatientSchedule'
          component={ PatientSchedule }
          options={{title: 'ConsultasPaciente'}}
          
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
