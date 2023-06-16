import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import Carrossel from "./Components/Carrossel";

const { width } = Dimensions.get("window");

export default function HomePage() {
  const carrosselItens = [
    { id: "1", image: require("../../../assets/imgHome/carrossel1-512w.png") }, // Importando a imagem corretamente
    { id: "2", image: require("../../../assets/imgHome/carrossel2-512w.png") },
    { id: "3", image: require("../../../assets/imgHome/carrossel3-512w.png") },
    // Adicione mais objetos de imagem conforme necessário
  ];

  return (
    <ScrollView>
      <Carrossel data={carrosselItens} />
      <Image
        source={require("../../../assets/imgHome/Naturale-2.png")}
        style={{ width: width, height: width, marginTop: 30, marginBottom: 30 }}
      ></Image>
    </ScrollView>
  );
}
