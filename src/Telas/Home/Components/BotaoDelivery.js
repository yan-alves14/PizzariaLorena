import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

import Texto from "../../../Components/Texto.js"

export default function btnDelivery({ titulo, textoSecundario, icone, background, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Image source={background} style={styles.backgroundImage} resizeMode="cover" />
      <View style={styles.content}>
        <Image source={icone} style={styles.icon} />
        <View style={styles.textContainer}>
          <Texto style={styles.title}>{titulo}</Texto>
          <Texto style={styles.subtitle}>{textoSecundario}</Texto>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 100,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#79221C',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    height: '110%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 30,
    marginLeft: 8
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'left',
  },
  texto: {
    textAlign: 'left',
  },
});
