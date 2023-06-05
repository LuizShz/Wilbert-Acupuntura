import * as React from "react";
import { useState, useMemo } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import moment from "moment";

export default EditarPaciente = ({ navigation }) => {

  const route = useRoute();
  const { id, dadosPaciente} = route.params;

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState();
  const [estadoCivil, setEstadoCivil] = useState();
  const [profissao, setProfissao] = useState("");
  const [qtdFilhos, setQtdFilhos] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");


  const handleSubmit = async () => {
    try {
      await axios.put(`http://192.168.1.6:3000/pessoas/${id}`, {
        nome: !nome ? dadosPaciente.nome : nome,
        endereco: !endereco ? dadosPaciente.endereco : endereco,
        telefone: !telefone ? dadosPaciente.telefone : telefone ,
        genero: !genero ? dadosPaciente.genero : genero,
        estadoCivil: !estadoCivil ? dadosPaciente.estadoCivil : estadoCivil,
        profissao: !profissao ? dadosPaciente.profissao : profissao,
        qtdFilhos: !qtdFilhos ? dadosPaciente.qtdFilhos : qtdFilhos,
        dataNascimento: !dataNascimento ? dadosPaciente.dataNascimento : dataNascimento,
        idade: !idade ? dadosPaciente.idade : idade,
      });
      alert("Paciente Editado com Sucesso!");
      navigation.navigate("Pacientes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../../../assets/acupunturaBackground.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text for="nome">Nome:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="nome"
            placeholder="Nome Completo"
            onChangeText={(newNome) => setNome(newNome)}
            defaultValue={dadosPaciente.nome}
          />

          <Text for="endereco">Endereço:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="endereco"
            placeholder="Endereço Completo"
            onChangeText={(newEndereco) => setEndereco(newEndereco)}
            defaultValue={dadosPaciente.endereco}
          />

          <Text for="telefone">Telefone de Contato:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="telefone"
            name="telefone"
            size="1%"
            placeholder="Telefone de Contato"
            onChangeText={(newTelefone) => setTelefone(newTelefone)}
            defaultValue={dadosPaciente.telefone}
          />

          <Text>Genero:</Text>
          <Picker
            id="genero"
            name="option"
            selectedValue={genero}
            onValueChange={setGenero}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>

          <Text>Estado Civil:</Text>
          <Picker
            id="estadoCivil"
            name="option"
            selectedValue={estadoCivil}
            onValueChange={setEstadoCivil}
          >
            <Picker.Item label="Solteiro(a)" value="Masculino(a)" />
            <Picker.Item label="Casado(a)" value="Casado(a)" />
            <Picker.Item label="Viuvo(a)" value="Viuvo(a)" />
          </Picker>

          <Text for="profissao">Profissão:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="profissao"
            placeholder="Profissão"
            onChangeText={(newProfissao) => setProfissao(newProfissao)}
            defaultValue={dadosPaciente.profissao}
          />

          <Text>Filhos:</Text>
          <Picker
            id="qtdFilhos"
            name="option"
            selectedValue={qtdFilhos}
            onValueChange={setQtdFilhos}
          >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3+" value="3+" />
          </Picker>

          <Text for="dataNascimento">Data de Nascimento:</Text>
          <MaskedTextInput
            style={styles.input}
            mask="99/99/9999"
            placeholder="DD/MM/AAAA"
            defaultValue={moment(dadosPaciente.dataNascimento).format("DD/MM/YYYY")}
            onChangeText={(text, rawText) => {
            setDataNascimento(text);
            }}
          />

          <Text for="idade">Idade:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="idade"
            placeholder="Idade"
            onChangeText={(newIdade) => setIdade(newIdade)}
            defaultValue={dadosPaciente.idade}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Welcome")}>
              <Text>Página Inicial</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("EditarFichaAnamnese", {id})}>
              <Text>Editar Ficha</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.colorSaveButton]}
              onPress={handleSubmit}
            >
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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
    marginTop: 30,
  },

  colorSaveButton: {
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

  input: {
    borderWidth: 1,
    borderColor: "#eee",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  container: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
});
