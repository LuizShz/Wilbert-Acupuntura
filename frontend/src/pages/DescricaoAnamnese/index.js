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
  KeyboardAvoidingView,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import RadioGroup from "react-native-radio-buttons-group";

export default DescricaoAnamnese = ({ navigation }) => {
  const [dataConsulta, setDataConsulta] = useState("");
  const [horaConsulta, setHoraConsulta] = useState("");
  const [observacao, setObservacao] = useState("");
  const [interrogatorio, setInterrogatorio] = useState("");
  const [localDoenca, setLocalDoenca] = useState("");
  const [naturezaDoenca, setNaturezaDoenca] = useState("");
  const [bianZhen, setBianZhen] = useState("");
  const [lunZhi, setLunZhi] = useState("");
  const [prescricao, setPrescricao] = useState("");
  const [cirurgia, setCirurgia] = useState("");
  const [medicacao, setMedicacao] = useState("");
  const [auriculo, setAuriculo] = useState("");
  const [pulsoDireito, setPulsoDireito] = useState("");
  const [pulsoEsquerdo, setPulsoEsquerdo] = useState("");
  const [lingua, setLingua] = useState("");

  const radioAcupuntura = useMemo(
    () => [
      {
        id: "1",
        label: "Sim",
        value: "sim",
        size: 15,
        borderSize: 1.5,
      },
      {
        id: "2",
        label: "Não",
        value: "nao",
        size: 15,
        borderSize: 1.5,
      },
    ],
    []
  );

  const [acupuntura, setAcupuntura] = useState();

  function handleSubmit() {
    const data = JSON.stringify({
      dataConsulta,
      horaConsulta,
      acupuntura,
      observacao,
      interrogatorio,
      naturezaDoenca,
      bianZhen,
      lunZhi,
      prescricao,
      cirurgia,
      medicacao,
      auriculo,
      pulsoDireito,
      pulsoEsquerdo,
      lingua,
    });
    alert(data);
  }
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../../assets/acupunturaBackground.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text for="dataConsulta">Data da Consulta:</Text>
          <MaskedTextInput
            style={styles.input}
            mask="99/99/9999"
            placeholder="DD/MM/AAAA"
            onChangeText={(text, rawText) => {
              setDataConsulta(text);
            }}
          />

          <Text for="horaConsulta">Hora da Consulta:</Text>
          <MaskedTextInput
            style={styles.input}
            mask="99:99"
            placeholder="HH:MM"
            onChangeText={(text, rawText) => {
              setHoraConsulta(text);
            }}
          />

          <Text>Já fez Acupuntura antes?</Text>
          <RadioGroup
            style={styles.radio}
            radioButtons={radioAcupuntura}
            onPress={setAcupuntura}
            selectedId={acupuntura}
          />

          <Text>Descreva alguma observação:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={6}
            placeholder="Digite seu texto"
            onChangeText={(newObservacao) => setObservacao(newObservacao)}
            defaultValue={observacao}
          />

          <Text>Interrogatório:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={6}
            placeholder="Digite seu texto"
            onChangeText={(newInterrogatorio) =>
              setInterrogatorio(newInterrogatorio)
            }
            defaultValue={interrogatorio}
          />

          <Text for="localDoenca">Localização da Doença:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="localDoenca"
            placeholder="Local da Doença"
            onChangeText={(newLocalDoenca) => setLocalDoenca(newLocalDoenca)}
            defaultValue={localDoenca}
          />

          <Text for="naturezaDoenca">Natureza da Doença:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="naturezaDoenca"
            placeholder="Natureza da Doença"
            onChangeText={(newNaturezaDoenca) =>
              setNaturezaDoenca(newNaturezaDoenca)
            }
            defaultValue={naturezaDoenca}
          />

          <Text>Bian Zhen(Síndrome):</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newBianZhen) => setBianZhen(newBianZhen)}
            defaultValue={bianZhen}
          />

          <Text>Lun Zhi(Princípio Terapêutico)</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newLunZhi) => setLunZhi(newLunZhi)}
            defaultValue={lunZhi}
          />

          <Text>Prescrição</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newPrescricao) => setPrescricao(newPrescricao)}
            defaultValue={prescricao}
          />

          <Text>Cirurgia</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newCirurgia) => setCirurgia(newCirurgia)}
            defaultValue={cirurgia}
          />

          <Text>Medicação em uso:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newMedicacao) => setMedicacao(newMedicacao)}
            defaultValue={medicacao}
          />

          <Text>Auriculo:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newAuriculo) => setAuriculo(newAuriculo)}
            defaultValue={auriculo}
          />

          <Text for="pulsoDireito">Pulso Direito:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="pulsoDireito"
            placeholder="Pulso Direito"
            onChangeText={(newPulsoDireito) => setPulsoDireito(newPulsoDireito)}
            defaultValue={pulsoDireito}
          />

          <Text for="pulsoEsquerdo">PulsoEsquerdo:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="pulsoEsquerdo"
            placeholder="Pulso Esquerdo"
            onChangeText={(newPulsoEsquerdo) =>
              setPulsoEsquerdo(newPulsoEsquerdo)
            }
            defaultValue={pulsoEsquerdo}
          />

          <Text>Língua:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Digite seu texto"
            onChangeText={(newLingua) => setLingua(newLingua)}
            defaultValue={lingua}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Text>Novo Paciente</Text>
            </Pressable>

            {/* BOTÃO PARA SALVAR */}
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
