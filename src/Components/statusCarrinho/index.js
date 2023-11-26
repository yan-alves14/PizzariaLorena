import React from "react";
import {View, StyleSheet, Image} from "react-native";

import Texto from "../Texto";
import Botao from "../Botao";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function StatusListaDesejoS({total}){

    

    return <View>
        <View>
            <Texto>Total Lista de Desejos</Texto>
            <Texto>{
                Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(total)
            }</Texto>
        </View>
        
        
    </View>
}

const styles = StyleSheet.create({
    conteudo: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
    },
    total: {
    alignItems: 'center',
    },
    descricao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    },
    valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: 'orange',
    },
    botao: {
    flexGrow: 1,
    alignItems: 'flex-end',
    },
});