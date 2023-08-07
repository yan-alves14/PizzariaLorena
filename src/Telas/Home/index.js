import React from "react";
import { ScrollView, Image, Dimensions, StyleSheet, View } from "react-native";
import Carrossel from "./Components/Carrossel";

import BgDelivery from "../../../assets/imgHome/fundo_btn.png";
import BgRetirar from "../../../assets/imgHome/fundo_btn.png";
import IconMotoboy from "../../../assets/imgHome/icone_motoboy.png";
import IconPizza from "../../../assets/imgHome/icone_btn_retirar.png";

import BotaoDelivery from "../Home/Components/BotaoDelivery.js";
import BotaoRetirar from "../Home/Components/BotaoRetirar.js"

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
        style={{ width: width, height: width, marginTop: 30, marginBottom: 30 }}
      ></Image>

      <Texto style={estilos.TextoDefault}>A Pizzaria Lorena é uma das melhores da região, destacando-se pelo seu atendimento, tradição, qualidade e profissionalidade de seus funcionários. Como nosso próprio slogan diz, a melhor da cidade!</Texto>
      <View style={estilos.spaceTOP}/>
        
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
      textAlign: 'justify',
      paddingLeft: 28,
      fontSize: 17,
      color: '#808080'
      //marginHorizontal:'10%',
    },
    TextoTitle:{
      marginLeft: '2%',
      marginRight: '2%',
      marginHorizontal:'10%',
      fontSize: 22,
      paddingLeft: 35,
      fontWeight:'bold',
    }
})
