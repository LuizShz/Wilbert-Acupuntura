import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Welcome = ({ navigation }) => {
  const listaDePacientes = [
    {
      nome: "Igor",
      horario: "15:00",
      id: 1,
    },

    {
      nome: "Karolina",
      horario: "14:00",
      id: 2,
    },

    {
      nome: "Luiz",
      horario: "13:00",
      id: 3,
    },

    {
      nome: "Duda",
      horario: "10:00",
      id: 4,
    },

    {
      nome: "Cristian",
      horario: "18:00",
      id: 5,
    },
  ];

  const listaAlfabetica = listaDePacientes.sort(function (a, b) {
    if (a.horario < b.horario) {
      return -1;
    }
    if (a.horario > b.horario) {
      return 1;
    }
    return 0;
  });

  const [pacientesPesquisar, setPacientesPesquisar] = useState("");

  const pesquisaPaciente = (text) => {
    const newData = listaAlfabetica.filter(
      (filtro) => text.toUpperCase() == filtro?.nome.toUpperCase()
    );
    if (newData && newData[0]?.nome) {
      alert(newData[0]?.nome);
    } else {
      alert("Panciente Inexistente.");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/acupunturaBackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <View style={styles.todosElementosContainer}>
          {/* BARRA DE PESQUISAR */}

          <View style={styles.header}>
            <View style={styles.pesquisar}>
              <View style={styles.searchContainer}>
                <TextInput
                  onChangeText={(newPacientesPesquisar) =>
                    setPacientesPesquisar(newPacientesPesquisar)
                  }
                  defaultValue={pacientesPesquisar}
                  placeholder="Pesquisar nome do paciente"
                  style={styles.searchInput}
                />
              </View>

              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => pesquisaPaciente(pacientesPesquisar)}
              >
                <Text style={styles.searchButtonText}>Pesquisar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.butonInicial}
                onPress={() => navigation.navigate("Cadastro")}
              >
                <Text>Novo Paciente</Text>
              </Pressable>

              <Pressable
                style={styles.butonInicial}
                onPress={() => navigation.navigate("DescricaoAnamnese")}
              >
                <Text>Descrição Anamnese</Text>
              </Pressable>

              <Pressable
                style={styles.butonInicial}
                onPress={() => navigation.navigate("Pacientes")}
              >
                <Text>Pacientes</Text>
              </Pressable>
            </View>
          </View>

          <View>
            <View style={styles.pacientes}>
              <Text style={styles.pacientetxt}> Pacientes: </Text>
              {listaAlfabetica.map((paciente) => (
                <View key={paciente.id} style={styles.pacientesContainer}>
                  <Text style={styles.nome}> {paciente.nome} </Text>
                  <Text> {paciente.horario} </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  butonInicial: {
    width: "auto",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdd0b4",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },

  image: {
    flex: 1,
  },

  pacientes: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
    gap: 5,
  },

  nome: {
    fontWeight: 700,
  },

  pacientesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },

  todosElementosContainer: {
    justifyContent: "space-between",
    height: "100%",
  },

  pesquisar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  header: {
    flexDirection: "column",
  },

  addButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },

  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  searchButton: {
    width: "auto",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e6df",
  },

  searchButtonText: {
    fontWeight: "bold",
  },

  searchContainer: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

  searchInput: {
    flex: 1,
    height: 40,
  },

  pacientetxt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Welcome;
