import * as React from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/acupunturaBackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.butonInicial}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonText}>Cadastro</Text>
          </Pressable>

          <Pressable
            style={styles.butonInicial}
            onPress={() => navigation.navigate("FichaAnamnese")}
          >
            <Text style={styles.buttonText}>Ficha</Text>
          </Pressable>

          <Pressable
            style={styles.butonInicial}
            onPress={() => navigation.navigate("Pacientes")}
          >
            <Text style={styles.buttonText}>Pacientes</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  butonInicial: {
    width: "auto",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdd0b4",
  },

  buttonText: {
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },

  image: {
    flex: 1,
  },
});

export default Welcome;
