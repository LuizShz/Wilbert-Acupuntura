import * as React from "react";
import { useState, useEffect } from "react";
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
import moment from "moment";

export default EditarFichaAnamnese = ({ navigation }) => {

  const route = useRoute();
  const { id } = route.params;
  const [dadosConsulta, setDadosConsulta] = useState([]);

  const [dataConsulta, setDataConsulta] = useState("");
  const [horaConsulta, setHoraConsulta] = useState("");
  const [acunpuntura, setAcunpuntura] = useState("");
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

  const fetchPost = async () => {
    try {
      let result = await axios.get(`http://192.168.1.6:3000/pessoas/${id}/consultas`);
      setDadosConsulta(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const handleSubmit = async ()  => {
    try{
      await axios.put(
        `http://192.168.1.6:3000/pessoas/${id}/consultas/${dadosConsulta._id}`, {
          dataConsulta: !dataConsulta ? dadosConsulta.dataConsulta : dataConsulta,
          horaConsulta: !horaConsulta ? dadosConsulta.horaConsulta : horaConsulta,
          acunpuntura: !acunpuntura ? dadosConsulta.acunpuntura : acunpuntura,
          queixaPrincipal: !queixaPrincipal ? dadosConsulta.queixaPrincipal : queixaPrincipal,
          interrogatorio: !interrogatorio ? dadosConsulta.interrogatorio : interrogatorio,
          localizacaoDoenca: !localizacaoDoenca ? dadosConsulta.localizacaoDoenca : localizacaoDoenca,
          naturezaDoenca: !naturezaDoenca ? dadosConsulta.naturezaDoenca : naturezaDoenca,
          sindrome: !sindrome ? dadosConsulta.sindrome : sindrome,
          principioTerapeutico: !principioTerapeutico ? dadosConsulta.principioTerapeutico : principioTerapeutico,
          prescricao: !prescricao ? dadosConsulta.prescricao : prescricao,
          cirurgia: !cirurgia ? dadosConsulta.cirurgia : cirurgia,
          medicacaoUso: !medicacaoUso ? dadosConsulta.medicacaoUso : medicacaoUso,
          auriculo: !auriculo ? dadosConsulta.auriculo : auriculo,
          pulsoDireito: !pulsoDireito ? dadosConsulta.pulsoDireito : pulsoDireito,
          pulsoEsquerdo: !pulsoEsquerdo ? dadosConsulta.pulsoEsquerdo : pulsoEsquerdo,
          lingua: !lingua ? dadosConsulta.lingua : lingua,
          etiopatogenia: !etiopatogenia ? dadosConsulta.etiopatogenia : etiopatogenia,
        },)
      alert("Ficha Editada com Sucesso!");
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
            defaultValue={moment(dadosConsulta.dataConsulta).format("DD/MM/YYYY")}
            onChangeText={(text, rawText) => {
              setDataConsulta(text);
            }}
          />

          <Text for="horaConsulta">Hora da Consulta:</Text>
          <MaskedTextInput
            style={styles.input}
            mask="99:99"
            placeholder="HH:MM"
            defaultValue={dadosConsulta.horaConsulta}
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
            defaultValue={dadosConsulta.queixaPrincipal}
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
            defaultValue={dadosConsulta.interrogatorio}
          />

          <Text for="localizacaoDoenca">Localização da Doença:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="localizacaoDoenca"
            placeholder="Localização da Doença"
            onChangeText={(newLocalizacaoDoenca) => setLocalizacaoDoenca(newLocalizacaoDoenca)}
            defaultValue={dadosConsulta.localizacaoDoenca}
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
            defaultValue={dadosConsulta.naturezaDoenca}
          />

          <Text>Bian Zhen(Síndrome):</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Síndrome"
            onChangeText={(newSindrome) => setSindrome(newSindrome)}
            defaultValue={dadosConsulta.sindrome}
          />

          <Text>Lun Zhi(Princípio Terapêutico)</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Princípio Terapêutico"
            onChangeText={(newPrincipioTerapeutico) => setPrincipioTerapeutico(newPrincipioTerapeutico)}
            defaultValue={dadosConsulta.principioTerapeutico}
          />

          <Text>Prescrição</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Prescrição"
            onChangeText={(newPrescricao) => setPrescricao(newPrescricao)}
            defaultValue={dadosConsulta.prescricao}
          />

          <Text>Cirurgia</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Cirurgia"
            onChangeText={(newCirurgia) => setCirurgia(newCirurgia)}
            defaultValue={dadosConsulta.cirurgia}
          />

          <Text>Medicação em uso:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Medicação em uso"
            onChangeText={(newMedicacaoUso) => setMedicacaoUso(newMedicacaoUso)}
            defaultValue={dadosConsulta.medicacaoUso}
          />

          <Text>Auriculo:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Auriculo"
            onChangeText={(newAuriculo) => setAuriculo(newAuriculo)}
            defaultValue={dadosConsulta.auriculo}
          />

          <Text for="pulsoDireito">Pulso Direito:</Text>
          <TextInput
            style={styles.input}
            type="text"
            id="pulsoDireito"
            placeholder="Pulso Direito"
            onChangeText={(newPulsoDireito) => setPulsoDireito(newPulsoDireito)}
            defaultValue={dadosConsulta.pulsoDireito}
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
            defaultValue={dadosConsulta.pulsoEsquerdo}
          />

          <Text>Língua:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Língua"
            onChangeText={(newLingua) => setLingua(newLingua)}
            defaultValue={dadosConsulta.lingua}
          />

          <Text>Etiopatogenia:</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            placeholder="Etiopatogenia"
            onChangeText={(newEtiopatogenia) => setEtiopatogenia(newEtiopatogenia)}
            defaultValue={dadosConsulta.etiopatogenia}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Welcome")}
            >
              <Text>Página Inicial</Text>
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
