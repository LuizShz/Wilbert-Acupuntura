import * as React from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";

export default Pacientes = ({ navigation }) => {
  const listaDePacientes = [
    {
      nome: "Igor",
      id: 1,
    },

    {
      nome: "Karolina",
      id: 2,
    },

    {
      nome: "Luiz",
      id: 3,
    },

    {
      nome: "Duda",
      id: 4,
    },

    {
      nome: "Cristian",
      id: 5,
    },
  ];

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
          {listaAlfabetica.map((paciente) => (
            <Pressable
              style={styles.listaPacientes}
              key={paciente.id}
              onPress={() => navigation.navigate("Welcome")}
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
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
  },
});
