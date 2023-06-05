import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cadastro from "../pages/SignUp";
import DescricaoAnamnese from "../pages/DescricaoAnamnese";
import Welcome from "../pages/Inicial";
import Pacientes from "../pages/Pacientes";
import DadosPaciente from "../pages/DadosPaciente";
import EditarPaciente from "../pages/EditarPaciente";
import EditarFichaAnamnese from "../pages/EditarFichaAnamnese";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Tânia Wilbert Acupuntura'}}/>

        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro Paciente'}} />

        <Stack.Screen name="DescricaoAnamnese" component={DescricaoAnamnese} options={{ title: 'Descrição Anamnese'}} />

        <Stack.Screen name="Pacientes" component={Pacientes} options={{ title: 'Lista de Pacientes'}} />

        <Stack.Screen name="DadosPaciente" component={DadosPaciente} options={{ title: 'Dados do Paciente'}} />

        <Stack.Screen name="EditarPaciente" component={EditarPaciente} options={{ title: 'Editar Paciente'}} />

        <Stack.Screen name="EditarFichaAnamnese" component={EditarFichaAnamnese} options={{ title: 'Editar Ficha Anamnese'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
