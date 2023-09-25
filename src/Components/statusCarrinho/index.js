import React from "react";
import {View} from "react-native";

import Texto from "../Texto";
import Botao from "../Botao";
import estilos from "./estilo";

export default function StatusListaDesejoS({total}){
    return <View>
        <View>
            <Texto>Total Lista de Desejos</Texto>
            <Texto>{
                Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(total)
            }</Texto>
        </View>
        <View style={estilos.botao}>
            <Botao texto= 'Concluir pedido'/>
        </View>
    </View>
}