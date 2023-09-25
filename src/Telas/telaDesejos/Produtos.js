import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import Texto from "../../Components/Texto";
import Item from './Item';
import StatusListaDesejo from "../../Components/statusCarrinho/index"


const produtos=[
    {
        id: 1,
        nome: "CESTA INVERNO",
        preco: 79.9,
        descricao: "Cesta de frutas típicas do inverno!",
        quantidade: 1,
    },
    {
        id: 2,
        nome: "CESTA VERÃO",
        preco: 89.9,
        descricao: "Cesta de frutas típicas do verão!",
        quantidade: 2,
    },
    {
        id: 3,
        nome: "CESTA ESTAÇÕES",
        preco: 99.9,
        descricao: "Uma cesta com frutas da estação vigente.",
        quantidade: 5,
    }
];

export default function listaDesejos (){

const total = produtos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

    return <SafeAreaView>
        <StatusListaDesejo total ={total} />
            <FlatList
                data={produtos}
                renderItem={({item})=>(<Item {...item}/>)}
                keyExtractor={({id})=>(String(id))}
            />
        </SafeAreaView>
}


