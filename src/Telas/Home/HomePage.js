import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";

import Texto from "../../ComponentesPadroes/Texto";

export default function HomePage(){
    return <ScrollView>
        <Texto style={estilos.bemvindo}>Bem Vindo;</Texto>
        <Texto style={estilos.bemvindo}></Texto>
    </ScrollView>
}


const estilos = StyleSheet.create({
    bemvindo:{
        fontSize: 20,
        color: "black",
    },

    
})