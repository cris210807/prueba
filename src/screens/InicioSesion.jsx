import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const InicioSesion = () => {
  const navigation = useNavigation(); 
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [mostrarPass, setMostarPass] = useState(false); 

  const userList = [
    { user: "cris", pass: "cris21" },
    { user: "joce", pass: "joce23" },
  ];

  const goIn = () => {
    const validUser = userList.find((u) => u.user === user && u.pass === pass);

    if (validUser) {
      navigation.navigate("Principal");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrecta");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
      </View>

      <TextInput
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Contraseña"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={!mostrarPass}
          style={styles.inputPassword}
        />
        <TouchableOpacity onPress={() => setMostarPass(!mostrarPass)}>
          <Icon name={mostrarPass ? "eye" : "eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={goIn} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", 
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FF5733",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default InicioSesion;