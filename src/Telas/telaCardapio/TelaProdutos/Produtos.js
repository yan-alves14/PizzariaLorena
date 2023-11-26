import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import Texto from "../../../Components/Texto";
import Item from './Item';

// import Produtos from "../../../../mock/pizzaCdp";

// const produtos=[
//     {
//         id: 1,
//         nome: "CESTA INVERNO",
//         preco: 79.9,
//         descricao: "Cesta de frutas típicas do inverno!"
//     },
//     {
//         id: 2,
//         nome: "CESTA VERÃO",
//         preco: 89.9,
//         descricao: "Cesta de frutas típicas do verão!"
//     },
//     {
//         id: 3,
//         nome: "CESTA ESTAÇÕES",
//         preco: 99.9,
//         descricao: "Uma cesta com frutas da estação vigente."
//     }
// ];

export default function Produtos (sabores){
    return <SafeAreaView>
            <FlatList
                data={sabores.listaS}
                renderItem={({item})=>(<Item {...item}/>)}
                keyExtractor={({id})=>(String(id))}
            />
        </SafeAreaView>
}


