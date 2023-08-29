import React from "react";
import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import Logo from "../../assets/logoSuperiorDaTela.png";
import Carrinho from "../../assets/carrinho.png";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.centerImage}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 34,
  },
  centerImage: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    width: "100%", // Ajuste a largura do logotipo conforme necessário
    height: 70,
  }
});
