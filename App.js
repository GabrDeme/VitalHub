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
import { DoctorSchedule } from './src/screens/Schedule/Schedule';
import { PatientSchedule } from './src/screens/PatientSchedule/PatientSchedule';
import { ClinicSelect } from './src/screens/ClinicSelect/ClinicSelect';
import { DoctorSelect } from './src/screens/DoctorSelect/DoctorSelect';
import { DateSelect } from './src/screens/DateSelect/DateSelect';
import { SeeLocation } from './src/screens/SeeLocation/SeeLocation';
import { Prescription } from './src/screens/Prescription/Prescription';

const Stack = createNativeStackNavigator();

import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates"
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand"
import { Main } from './src/screens/Main/Main';
import Camera from './src/components/Camera/Camera';

export default function App() {

  const [ fontsLoaded, fontsError ] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold    
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
        
          name='Login'
          component={Login}
          options={{title: 'Login'}}
          
          />

        <Stack.Screen
        
          name='Main'
          component={ Main }
          />

        {/* <Stack.Screen
        
          name='Navegacao'
          component={Navigation}
          options={{title: 'Navegacao'}}
          
          /> */}

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
          options={{title: 'Consultas Medico'}}
          
          />

        <Stack.Screen
        
          name='PatientSchedule'
          component={ PatientSchedule }
          options={{title: 'Consultas Paciente'}}
          
          />

        <Stack.Screen
        
          name='ClinicSelect'
          component={ ClinicSelect }
          options={{title: 'Selecionar a Clínica'}}
          
          />

        <Stack.Screen
        
          name='DoctorSelect'
          component={ DoctorSelect }
          options={{title: 'Selecionar a Médico'}}
          
          />

        <Stack.Screen
        
          name='DateSelect'
          component={ DateSelect }
          options={{title: 'Selecionar a Data'}}
          
          />

        <Stack.Screen
        
          name='SeeLocation'
          component={ SeeLocation }
          options={{title: 'Ver Localização'}}
          
          />

        <Stack.Screen
        
          name='Prescription'
          component={ Prescription }
          options={{title: 'Ver Prescrição do Médico'}}
          
          />


          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
