import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Texto from "../../../Components/Texto";

export default function Item({ item: { itens, precoO, precoProm } }) {
  return (
    <View key={itens} style={estilos.item}>
      <Texto style={estilos.nome}>{itens}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#C3C3C3",
    margin: "3%",
    padding: "2%",
    borderRadius: 10,
    textAlign: "center",
  },
  nome: {
    textAlign: "center",
    fontSize: 10,
  },
  // item: {
  //     flexDirection: "row",
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#ECECEC",
  //     padding: 16,
  //     alignItems: "center",
  // },
  //
});
