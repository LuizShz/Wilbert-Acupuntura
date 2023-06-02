import * as React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default Pacientes = ({ navigation }) => {
  const [listaDePacientes, setListaDePacientes] = useState([]);

  const fetchPost = async () => {
    try {
      let result = await axios.get("http://192.168.0.19:3000/pessoas");
      setListaDePacientes(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const listaAlfabetica = listaDePacientes.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  });

  return (
    <ImageBackground
      source={require("../../../assets/acupunturaBackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.pageContainer}>
        <View style={styles.pacientes}>
          {listaAlfabetica.map((paciente, index) => (
            <Pressable
              style={styles.listaPacientes}
              key={index}
              onPress={() => navigation.navigate("DadosPaciente", {id: paciente._id})}
            >
              <Text style={styles.textPacientes}> {paciente.nome} </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text>Página Inicial</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonCorNovoPaciente]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text>Novo Paciente</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "auto",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e6df",
    marginBottom: 30,
  },

  buttonCorNovoPaciente: {
    backgroundColor: "#bdd0b4",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },

  pageContainer: {
    justifyContent: "space-between",
    height: "100%",
    marginHorizontal: 30,
    overflow: "scroll"
  },

  pacientes: {
    marginHorizontal: 30,
    marginVertical: 30,
  },

  textPacientes: {
    fontWeight: "bold",
  },

  listaPacientes: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },

  image: {
    flex: 1,
  },
});
