import React from "react";
import { Image, View, StyleSheet } from "react-native";

import {LinearGradient} from 'expo-linear-gradient';
import Texto from "../../../Components/Texto";

export default function Item({ item: { itens, precoO, precoProm, imagem1, imagem2 } }) {
  return (
    <LinearGradient
      key={itens}
      style={styles.itemPromo}
      colors={['#d9d9d9', '#d9d9d9', '#EEA80C']}
      locations={[0, 0.75, 1]}
      start={{ x: 0, y: -1 }}
      end={{ x: 0, y: 1 }}
    >
      <View>
        {/* img e titulo promo */}
        <View style={styles.imgs}>
          <Image source={imagem1}></Image>
          <Image source={imagem2}></Image>
        </View>
        <Texto style={styles.promocao}>{itens}</Texto>
      </View>
      <View style={styles.precoContainer}>
        <Texto style={styles.preco}>{precoO}</Texto>
        <Texto style={styles.preco}>{precoProm}</Texto>
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
    marginLeft: '15%',
    paddingHorizontal: '15%',
    textAlign: 'center',
    fontSize: 12,
  },
  imgs: {
    flexDirection: 'row',
    marginLeft: '30%',
    transform: [{ scale: 0.8 }],
  },
  preco: {
    alignItems: 'center',

  }, precoContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
    padding: '10%',

  },
});
