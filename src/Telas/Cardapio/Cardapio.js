import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function Cardapio({topo, detalhes, itens}){
    // return <ScrollView>
    //     <Topo {...topo}/>
    //     <Descricao {...detalhes}/> 
    //     <Itens {...itens} />
    // </ScrollView>
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            extractorKey={({nome})=>{nome}}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo}/>
                    <Descricao {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})