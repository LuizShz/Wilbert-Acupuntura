import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cadastro from "../pages/SignUp";
import DescricaoAnamnese from "../pages/DescricaoAnamnese";
import Welcome from "../pages/Inicial";
import Pacientes from "../pages/Pacientes";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Wilbert Acupuntura'}}/>

        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro Paciente'}} />

        <Stack.Screen name="DescricaoAnamnese" component={DescricaoAnamnese} options={{ title: 'Descrição Anamnese'}} />

        <Stack.Screen name="Pacientes" component={Pacientes} options={{ title: 'Lista de Pacientes'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
