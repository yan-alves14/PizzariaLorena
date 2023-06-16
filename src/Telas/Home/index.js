import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import Carrossel from "./Components/Carrossel";

import BgDelivery from "../../../assets/fundo_btn.png"
import BgRetirar from "../../../assets/fundo_btn.png"
import IconMotoboy from "../../../assets/imgHome/icone_motoboy.png"
import IconPizza from "../../../assets/imgHome/icone_btn_retirar.png"

import BotaoDelivery from "../Home/Componentes/BotaoDelivery.js";
import BotaoRetirar from "../Home/Componentes/BotaoRetirar.js"

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
      <View style={estilos.spaceTOP}/>
        <View style={estilos.container}>
          <BotaoDelivery
          titulo="Prefiro delivery"
          textoSecundario="Receba em casa, com rapidez e qualidade"
          background={BgDelivery}
          icone={IconMotoboy}/>
        <View style={estilos.spaceBOT}/>
          <BotaoRetirar
          titulo="Prefiro retirar"
          textoSecundario="Faça seu pedido e retire em nossa loja."
          background={BgRetirar}
          icone={IconPizza}/>
    </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    },
    spaceBOT:{
      height: 16,
    },
    spaceTOP: {
      height: 30,
    }
})
