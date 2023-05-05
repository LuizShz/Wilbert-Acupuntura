import * as React from "react";
import { useState, useMemo } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Picker } from "@react-native-picker/picker";
import Constants from "expo-constants";
import RadioGroup from "react-native-radio-buttons-group";



export default Cadastro = ({ navigation }) => {
  const radioSexo = useMemo(() => ([
    {
      id: "1",
      label: "Masculino",
      value: "Masculino",
      size: 15,
      borderSize: 1.5
    
    },
    {
      id: "2",
      label: "Feminino",
      value: "Feminino",
      size: 15,
      borderSize: 1.5
    },
    {
      id: "3",
      label: "Outros",
      value: "Outros",
      size: 15,
      borderSize: 1.5
    },
  ]), []);

  const [sexo, setSexo] = useState ();

  const radioEstadoCivil = useMemo(() => ([
    {
      id: "1",
      label: "Casado",
      value: "Casado",
      size: 15,
      borderSize: 1.5
    },
    {
      id: "2",
      label: "Solteiro",
      value: "Solteiro",
      size: 15,
      borderSize: 1.5
    },
    {
      id: "3",
      label: "Viuvo",
      value: "Viuvo",
      size: 15,
      borderSize: 1.5
    },
    
  ]), []);

  const [estadoCivil, setEstadoCivil] = useState();

  function onPressEstadoCivil(radioButtonsArray) {
    setEstadoCivil(radioButtonsArray);
  }
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState(''); 
  const [escolaridade, setEscolaridade] = useState('');
  const [profissao, setProfissao] = useState('');
  const [qntdFilhos, setQntdFilhos] = useState('');
  const [religiao, setReligiao] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');
  
  function handleSubmit (){
    const data = JSON.stringify({
      nome, endereco, telefone, sexo, escolaridade, estadoCivil, profissao, qntdFilhos, religiao, dataNascimento, idade
    });
    alert(data)
  }

  return (
    <ScrollView>
      <ImageBackground
        source={require("../../../assets/acupunturaBackground.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text for="nome">Nome:</Text>
          <TextInput style={styles.input} 
          type="text" 
          id="nome" 
          placeholder="Nome Completo"
          onChangeText={newNome => setNome(newNome)}
          defaultValue={nome}
          />

          <Text for="endereco">Endereço:</Text>
          <TextInput style={styles.input}
            type="text"
            id="endereco"
            placeholder="Endereço Completo"
            onChangeText={newEndereco => setEndereco(newEndereco)}
          defaultValue={endereco}
          />

          <Text for="telefone">Telefone de Contato:</Text>
          <TextInput style={styles.input}
            type="text"
            id="telefone"
            name="telefone"
            size="1%"
            placeholder="Telefone de Contato"
            onChangeText={newTelefone => setTelefone(newTelefone)}
          defaultValue={telefone}
          />

          <Text>Sexo:</Text>
          <RadioGroup radioButtons={radioSexo} onPress={setSexo} selectedId={sexo} />

          <Text for="escolaridade">Escolaridade:</Text>
          <TextInput style={styles.input} 
          type="text" 
          id="escolaridade" 
          placeholder="Escolaridade" 
          onChangeText={newEscolaridade=> setEscolaridade(newEscolaridade)}
          defaultValue={escolaridade}
          />

          <Text>Estado Civil:</Text>
          <RadioGroup radioButtons={radioEstadoCivil} onPress={setEstadoCivil} selectedId={estadoCivil} />

          <Text for="profissao">Profissão:</Text>
          <TextInput style={styles.input} type="text" 
          id="profissao" 
          placeholder="Profissão"
          onChangeText={newProfissao => setProfissao(newProfissao)}
          defaultValue={profissao} 
          />

          <Text>Filhos:</Text>
          <Picker id="qntdFilhos" name="option" selectedValue={qntdFilhos} onValueChange={setQntdFilhos}>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3+" value="3+" />
          </Picker>

          <Text for="religiao">Religião / Crença:</Text>
          <TextInput style={styles.input}
            type="text"
            id="religiao"
            placeholder="Religião / Crença"
            onChangeText={newReligiao => setReligiao(newReligiao)}
          defaultValue={religiao}
          />

          <Text for="dataNascimento">Data de Nascimento:</Text>
          <MaskedTextInput
            style={styles.input}
            mask="99/99/9999"
            onChangeText={(text, rawText) => {
              console.log(text);
              console.log(rawText);
            }}
          />

          <Text for="idade">Idade:</Text>
          <TextInput style={styles.input} 
          type="text" 
          id="idade" 
          placeholder="Idade" 
          onChangeText={newIdade => setIdade(newIdade)}
          defaultValue={idade}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Welcome")}
            >
              <Text>Página Inicial</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("FichaAmnese")}
            >
              <Text>Ficha Amnese</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleSubmit}>
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
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 20,
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

  input: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },

  container: {
    marginHorizontal: 30,
  },

});
