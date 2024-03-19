import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

//importar os recursos da biblioteca
import * as Notifications from "expo-notifications";

//solicitar permissões
Notifications.requestPermissionsAsync();

//definir como as notificações devem ser relatadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //alerta de quando a notificação for recebida
    shouldShowAlert: true,
    //som de quando a notificação for recebida
    shouldPlaySound: true,
    //números de quantas notificações foram recebidas
    shouldSetBadge: false,
  }),
});

export default function CancelNotification() {
  //função para lidar com a chamada de notificações
  const handleNotifications = async () => {
    //obtém status das permissões
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão para notificações
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas!");
      return;
    }
    //agendar uma notificação para ser exibida após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Má notícia 😥!",
        body: "A sua consulta foi cancelada!"
      },
      trigger: null
    });
  };


}