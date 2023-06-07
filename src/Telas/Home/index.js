import React from "react";
import { ScrollView } from "react-native";
import Carrossel from "./Components/Carrossel";

export default function HomePage() {
  const colorsCarrossel = [
    "rgb(255,255,0)",
    "rgb(65,65,65)",
    "rgb(103, 20, 130)",
  ];
  return (
    <ScrollView>
      <Carrossel data={colorsCarrossel} />
    </ScrollView>
  );
}
