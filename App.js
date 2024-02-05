import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
          nome='Navegacao'
          component={Navegacao}
          options={{title: 'Navegacao'}}
          
          >
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
