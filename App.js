import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InicioSesion from "./src/screens/InicioSesion";
import Principal from "./src/screens/Principal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioSesion">
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="Principal" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  title: {
    color: "purple",
    fontSize: 40,
    marginBottom: 20, 
  },
  input: {
    fontSize: 20,
    backgroundColor: "blue",
    color: "white", 
    padding: 10,
    borderRadius: 5, // Redondeo de los bordes
    width: "80%", // Tamaño adecuado para el input
    marginBottom: 15, // Espaciado entre los inputs
  },
  inputView: {
    flex: 1,
    width: "80%", // Asegurando que el contenedor tenga un ancho adecuado
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    margin: 10,
    borderRadius: 5, 
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
