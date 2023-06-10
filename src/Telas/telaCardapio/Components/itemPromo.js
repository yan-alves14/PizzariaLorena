import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Texto from "../../../Components/Texto";

export default function Item({ item: { itens, precoO, precoProm, imagem1, imagem2 } }) {
  return (
    <View key={itens} style={styles.itemPromo}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  itemPromo: {
    width: '90%',
    backgroundColor: '#C3C3C3',
    margin: '3%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  promocao: {
    flex: 1,
    flexShrink: 1,
    paddingHorizontal: '20%',
    textAlign: 'center',
    fontSize: 12,
  },
  imgs: {
    flexDirection: 'row',
    marginRight: -30,
    transform: [{ scale: 0.8 }],
  },
  preco: {
    marginRight: 30,

  }, precoContainer: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
});
