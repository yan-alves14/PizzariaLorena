import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

import Texto from "../../../Components/Texto.js"

export default function btnRetirar({ titulo, textoSecundario, icone, background, style }) {
    return (
      <TouchableOpacity style={estilos.button}>
        <Image source={background} style={estilos.backgroundImage} resizeMode="cover" />
        <View style={estilos.content}>
          <Image source={icone} style={estilos.icon} />
          <View style={estilos.textContainer}>
            <Texto style={estilos.title}>{titulo}</Texto>
            <Texto style={estilos.subtitle}>{textoSecundario}</Texto>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
    


  const estilos = StyleSheet.create({
    button: {
      width: "90%",
      height: 100,
      borderRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B82C21',
      
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