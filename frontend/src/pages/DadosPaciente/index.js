import * as React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import moment from "moment";

export default DadosPaciente = ({ navigation }) => {
  const [dadosPaciente, setDadosPaciente] = useState([]);

  const route = useRoute();
  const { id } = route.params;

  const fetchPost = async () => {
    try {
      let result = await axios.get(`http://192.168.1.6:3000/pessoas/${id}`);
      setDadosPaciente(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const deletarPaciente = () =>
    Alert.alert(
      "Excluir Paciente",
      `DESEJA REALMENTE EXCLUIR ESSE PACIENTE?! ${dadosPaciente.nome}`,
      [
        {
          text: "NÃO",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "SIM",
          onPress: async () => {
            try {
              await axios.delete(`http://192.168.1.6:3000/pessoas/${id}`);
              alert(`${dadosPaciente.nome} EXCLUÍDO COM SUCESSO!!`);
              navigation.navigate("Welcome");
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );

  return (
    <ImageBackground
      source={require("../../../assets/acupunturaBackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.pageContainer}>
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Nome:</Text>
                <Text>{dadosPaciente.nome}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Telefone:</Text>
                <Text>{dadosPaciente.telefone}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Data de Nascimento: </Text>
                <Text>
                  {moment(dadosPaciente.dataNascimento).format("DD/MM/YYYY")}
                </Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Gênero: </Text>
                <Text> {dadosPaciente.genero}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Estado Civil: </Text>
                <Text> {dadosPaciente.estadoCivil}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Idade: </Text>
                <Text> {dadosPaciente.idade}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Endereço: </Text>
                <Text> {dadosPaciente.endereco}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Filhos: </Text>
                <Text> {dadosPaciente.qtdFilhos}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>Profissão: </Text>
                <Text> {dadosPaciente.profissao}</Text>
              </View>
            </View>

            <View>
              {dadosPaciente.consultas?.map((consulta, index) => (
                <View key={index}>
                  <View  style={styles.textContainer}>
                    <Text style={styles.title}>Data da Consulta: </Text>
                    <Text>
                      {moment(consulta.dataConsulta).format("DD/MM/YYYY")}
                    </Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Hora da Consulta: </Text>
                    <Text> {consulta.horaConsulta} </Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Já fez acunpuntura:</Text>
                    <Text> {consulta.acunpuntura}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Queixa Principal:</Text>
                    <Text> {consulta.queixaPrincipal}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Interrogatório:</Text>
                    <Text> {consulta.interrogatorio}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Localização da Doença:</Text>
                    <Text> {consulta.localizacaoDoenca}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Naruteza da Doença:</Text>
                    <Text> {consulta.naturezaDoenca}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Síndrome: </Text>
                    <Text> {consulta.sindrome}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Princípio Terapêutico:</Text>
                    <Text> {consulta.principioTerapeutico}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Prescrição:</Text>
                    <Text> {consulta.prescricao}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Cirurgia:</Text>
                    <Text> {consulta.cirurgia}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Medicação em Uso:</Text>
                    <Text> {consulta.medicacaoUso}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Auriculo:</Text>
                    <Text> {consulta.auriculo}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Pulso Direito:</Text>
                    <Text> {consulta.pulsoDireito}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Pulso Esquerdo:</Text>
                    <Text> {consulta.pulsoEsquerdo}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Língua:</Text>
                    <Text> {consulta.lingua}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Etiopatogenia:</Text>
                    <Text> {consulta.etiopatogenia}</Text>
                  </View>
                </View>
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
                style={[styles.button, styles.colorButton]}
                onPress={() => navigation.navigate("DescricaoAnamnese", { id })}
              >
                <Text>Ficha Anamnese</Text>
              </Pressable>

              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate("EditarPaciente", { id, dadosPaciente })
                }
              >
                <Text>Editar</Text>
              </Pressable>

              <Pressable style={styles.button} onPress={deletarPaciente}>
                <Text>Excluir</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    backgroundColor: "#e1e6df",
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  pageContainer: {
    justifyContent: "space-between",
    gap: 15,
    height: "100%",
    marginHorizontal: 30,
    marginVertical: 30,
    flexDirection: "column",
    flex: 1,
  },

  image: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
  },

  textContainer: {
    marginBottom: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },

  colorButton: {
    backgroundColor: "#bdd0b4",
  },
});
