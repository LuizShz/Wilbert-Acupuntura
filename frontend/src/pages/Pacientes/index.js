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

export default Pacientes = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/acupunturaBackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.textcenter}> Lista de Pacientes</Text>
    </ImageBackground>
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
  
    textcenter: {
        alignSelf: 'center',
        fontSize: 30,
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
