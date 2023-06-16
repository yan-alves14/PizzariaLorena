import React from "react";
import { Image, View, StyleSheet } from "react-native";

import {LinearGradient} from 'expo-linear-gradient';
import Texto from "../../../Components/Texto";

export default function Item({ item: { itens, precoO, precoProm, imagem1, imagem2 } }) {
  return (
    <LinearGradient
      key={itens}
      style={styles.itemPromo}
      colors={['#d9d9d9', '#d9d9d9', '#F77600']}
      locations={[0, 0.75, 1]}
      start={{ x: 0, y: -1 }}
      end={{ x: 0, y: 1 }}
    >
      <View>
        {/* img e titulo promo */}
        <View style={styles.imgs}>
          <Image source={imagem1} style={styles.img1}></Image>
          <Image source={imagem2} style={styles.img2}></Image>
        </View>
        <Texto style={styles.promocao}>{itens}</Texto>
      </View>
      <View style={styles.precoContainer}>
        <Texto style={styles.preco}>{precoO}</Texto>
        <Texto style={styles.precopromo}>{precoProm}</Texto>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  itemPromo: {
    width: '90%',
    margin: '3%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '1%',
  },
  promocao: {
    // flex: 1,
    // flexShrink: 1,
    marginLeft: '20%',
    paddingHorizontal: '15%',
    textAlign: 'center',
    fontSize: 14,
  },
  imgs: {
    flexDirection: 'row',
    transform: [{ scale: 0.8 }],
  },
  img1: {
    flexDirection: 'row',
    marginLeft: '30%',
    transform: [{ scale: 0.8 }],
  },
  img2: {
    flexDirection: 'row',
    marginLeft: '0%',
    transform: [{ scale: 0.8 }],
  },

  preco: {
    alignItems: 'center',
    fontSize: 25,
    color: "#F77600",
   // padding: '10%',
  },
  precopromo: {
    alignItems: 'center',
    fontSize: 25,
    color: "#BC0B0B",
    marginTop: "65%",
    //padding: '20%',
  },  
  precoContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
    padding: '10%',

  },
});
