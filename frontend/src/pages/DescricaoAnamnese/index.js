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
  KeyboardAvoidingView,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Picker } from "@react-native-picker/picker";
import { useRoute } from '@react-navigation/native';
import axios from "axios";

export default DescricaoAnamnese = ({ navigation }) => {
  const [dataConsulta, setDataConsulta] = useState("");
  const [acunpuntura, setAcunpuntura] = useState();
  const [horaConsulta, setHoraConsulta] = useState("");
  const [queixaPrincipal, setQueixaPrincipal] = useState("");
  const [interrogatorio, setInterrogatorio] = useState("");
  const [localizacaoDoenca, setLocalizacaoDoenca] = useState("");
  const [naturezaDoenca, setNaturezaDoenca] = useState("");
  const [sindrome, setSindrome] = useState("");
  const [principioTerapeutico, setPrincipioTerapeutico] = useState("");
  const [prescricao, setPrescricao] = useState("");
  const [cirurgia, setCirurgia] = useState("");
  const [medicacaoUso, setMedicacaoUso] = useState("");
  const [auriculo, setAuriculo] = useState("");
  const [pulsoDireito, setPulsoDireito] = useState("");
  const [pulsoEsquerdo, setPulsoEsquerdo] = useState("");
  const [lingua, setLingua] = useState("");
  const [etiopatogenia, setEtiopatogenia] = useState("");

  const route = useRoute();
  const { id } = route.params;

  const handleSubmit = async ()  => {
    try{
      await axios.post(
        `http://192.168.1.6:3000/pessoas/${id}/consultas`, {
          dataConsulta,
          horaConsulta,
          acunpuntura,
          queixaPrincipal,
          interrogatorio,
          localizacaoDoenca,
          naturezaDoenca,
          sindrome,
          principioTerapeutico,
          prescricao,
          cirurgia,
          medicacaoUso,
          auriculo,
          pulsoDireito,
          pulsoEsquerdo,
          lingua,
          etiopatogenia,
        },
      )
      alert("Ficha Cadastrada com Sucesso!");
      navigation.navigate("Pacientes");
    } 
    catch(error) {
      console.error(error);
    }
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
          <Picker
            id="acunpuntura"
            name="option"
            selectedValue={acunpuntura}
            onValueChange={setAcunpuntura}
          >
            <Picker.Item label="SIM" value="SIM" />
            <Picker.Item label="NÃO" value="NÃO" />
          </Picker>


          <Text>Principal Queixa:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={6}
            placeholder="Queixa Principal"
            onChangeText={(newQueixaPrincipal) => setQueixaPrincipal(newQueixaPrincipal)}
            defaultValue={queixaPrincipal}
          />

          <Text>Interrogatório:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={6}
            placeholder="Interrogatório"
            onChangeText={(newInterrogatorio) =>
              setInterrogatorio(newInterrogatorio)
            }
            defaultValue={interrogatorio}
          />

          <Text for="localizacaoDoenca">Localização da Doença:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="localizacaoDoenca"
            placeholder="Localização da Doença"
            onChangeText={(newLocalizacaoDoenca) => setLocalizacaoDoenca(newLocalizacaoDoenca)}
            defaultValue={localizacaoDoenca}
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
            placeholder="Síndrome"
            onChangeText={(newSindrome) => setSindrome(newSindrome)}
            defaultValue={sindrome}
          />

          <Text>Lun Zhi(Princípio Terapêutico)</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Princípio Terapêutico"
            onChangeText={(newPrincipioTerapeutico) => setPrincipioTerapeutico(newPrincipioTerapeutico)}
            defaultValue={principioTerapeutico}
          />

          <Text>Prescrição</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Prescrição"
            onChangeText={(newPrescricao) => setPrescricao(newPrescricao)}
            defaultValue={prescricao}
          />

          <Text>Cirurgia</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Cirurgia"
            onChangeText={(newCirurgia) => setCirurgia(newCirurgia)}
            defaultValue={cirurgia}
          />

          <Text>Medicação em uso:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Medicação em uso"
            onChangeText={(newMedicacaoUso) => setMedicacaoUso(newMedicacaoUso)}
            defaultValue={medicacaoUso}
          />

          <Text>Auriculo:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Auriculo"
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
            placeholder="Língua"
            onChangeText={(newLingua) => setLingua(newLingua)}
            defaultValue={lingua}
          />

          <Text>Etiopatogenia:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Etiopatogenia"
            onChangeText={(newEtiopatogenia) => setEtiopatogenia(newEtiopatogenia)}
            defaultValue={etiopatogenia}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Pacientes")}
            >
              <Text>Pacientes</Text>
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
