import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import {LinearGradient} from 'expo-linear-gradient';
import Texto from "../../../Components/Texto";

export default function Item({ item: { itens, precoO, precoProm, imagem1, imagem2, xICon } }) {
  return (
    <TouchableOpacity>
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
          <Texto style={styles.xItem}>{xICon}</Texto>
          <Texto style={styles.preco}>{precoO}</Texto>
          <Texto style={styles.precopromo}>{precoProm}</Texto>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchAble:{
    borderRadius: 10,
    opacity: 1,
  },
  xItem:{
    position: 'absolute',
    top: 16,
    left: 50,
    fontSize: 45,
    color:'red',
    transform: [{ rotate: '90deg' }],
  },
  itemPromo: {
    width: '90%',
    margin: '3%',
    borderRadius: 10,
    borderWidth: 1,
    //elevation: 3,
    borderColor:  'gray',
    //borderColor: '',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '1%',
  },
  promocao: {
    // flex: 1,
    // flexShrink: 1,
    marginLeft: '38%',
    paddingHorizontal: '8%',
    textAlign: 'center',
    fontSize: 14,
  },
  imgs: {
    flexDirection: 'row',
    transform: [{ scale: 0.8 }],
    marginLeft: '20%',
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
    fontSize: 22,
    color: "#F77600",
   // padding: '10%',
  },
  precopromo: {
    alignItems: 'center',
    fontSize: 22,
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
