import React from "react";
import { ScrollView, Image, Dimensions, StyleSheet, View, Text } from "react-native";
import Carrossel from "./Components/Carrossel";

import BgDelivery from "../../../assets/imgHome/fundo_btn.png";
import BgRetirar from "../../../assets/imgHome/fundo_btn.png";
import IconMotoboy from "../../../assets/imgHome/icone_motoboy.png";
import IconPizza from "../../../assets/imgHome/icone_btn_retirar.png";

import BotaoDelivery from "../Home/Components/BotaoDelivery.js";
import BotaoRetirar from "../Home/Components/BotaoRetirar.js"
import BotaoBanner from "./Components/BotaoBanner";

import Texto from "../../Components/Texto";

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
      <View style={estilos.spaceTOP}/>
      <Texto style={estilos.TextoTitle}>Bem Vindo!</Texto>
    
      <Texto style={estilos.TextoDefault}>Escolha sua forma de compra:</Texto>
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
      <Image
        source={require("../../../assets/imgHome/Naturale-2.png")}
        style={{ width: width, height: width, marginTop: 30}}
      ></Image>
      <View style={estilos.Separator} />
      <Text style={estilos.QuestionTitle}>Por que a Pizzaria Lorena?</Text>
      <Texto style={estilos.TextoDefault}>A Pizzaria Lorena é uma das melhores da região, destacando-se pelo seu atendimento, tradição, qualidade e profissionalidade de seus funcionários. Como nosso próprio slogan diz, a melhor da cidade!</Texto>
      <View style={estilos.Separator} />
      <Text style={estilos.QuestionTitle}>Agora Mesmo!</Text>
      <Texto style={estilos.Subtitle}>Agora que você sabe quem somos, aproveite e e peça nossa deliciosa pizza!</Texto>
      <BotaoBanner
        titulo="TESTE"
        textoPreto="OI"
        
      />
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
  },
  TextoDefault:{
    margin: '5%',
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    color: '#000',
    fontWeight: '400',
  },
  TextoTitle:{
    marginLeft: '2%',
    marginRight: '2%',
    marginHorizontal:'10%',
    fontSize: 22,
    paddingLeft: 35,
    fontWeight:'bold',
  },
  Separator: {
    width: 77,
    flexShrink: 0,
    height: 2.5,
    backgroundColor: '#000',
    borderRadius: 26,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  QuestionTitle: {
    fontFamily: "GreatVibes",
    color: "#000",
    textAlign: "center",
    textShadowColor: "#D77E19",
    textShadowRadius: 6,
    fontSize: 40,
    letterSpacing: -0.54,
    marginTop: 7,
    marginBottom: 7,
  },
  Subtitle: {
    color: "#000",
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.22,
    textAlign: "center",
    padding: 20,
    paddingTop: 0,
  }
})
