import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import MontSerratText from "../../../Components/Texto.js";

export default function BotaoBanner({
  titulo,
  textoPreto,
  textoLaranja,
  imagem,
}) {
  return (
    <TouchableOpacity style={styles.botao}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.paragraph}>
          <MontSerratText style={styles.blackText}>
            {textoPreto + " "}
          </MontSerratText>
          <MontSerratText style={styles.orangeText}>
            {textoLaranja}
          </MontSerratText>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imagem} style={styles.image}></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: "77%",
    height: 100,
    backgroundColor: "#D9D9D9",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#79221C",
    borderWidth: 2,
    flexDirection: "row",
    alignSelf: "center",
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10, // Adiciona sombra no Android
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start", // Alinhe o conteúdo ao topo
    alignItems: "center",
    flexShrink: 0,
  },
  title: {
    color: "#000",
    textAlign: "center",
    
    fontSize: 16,
    letterSpacing: -0.24,
    fontWeight: "bold",
  },
  paragraph: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: 13,
    letterSpacing: -0.22,
  },
  blackText: {
    color: "#000",
  },
  orangeText: {
    color: "#F77600",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
    borderTopRightRadius: 34,
    borderBottomRightRadius: 34,
    borderWidth: 1,
    borderColor: "#79221C",
    borderLeftWidth: 5,
  },
});
