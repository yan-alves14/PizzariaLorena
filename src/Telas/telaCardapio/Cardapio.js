import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";

//Componentes padroes
import Texto from "../../ComponentesPadroes/Texto";

// Componentes cardapio / botao, barra de pesquisa
import btnRetira from "./Componentes/BotaoRetirar";
import btnDelivery from "./Componentes/BotaoDelivery";
import BarraPesquisa from "./Componentes/Pesquisa";
import Item from "./Componentes/itemPromo";


export default function Cardapio({promocao, sabores}){
    const handlePesquisa = (termoPesquisa) => {
        // Lógica de pesquisa aqui
        console.log('Pesquisar por:', termoPesquisa);
    };
    
    const renderItem = ({ item }) => {
        return <Text>{item.nome}</Text>;
    };

    // return<>
    // <BarraPesquisa onPesquisa={handlePesquisa} />
    // <FlatList 
    //     data={promocao.listaP}
    //     renderItem={Item}
    //     extractorKey={({nome})=>{nome}}
            
    //     />
    // </>

    return<>
        <FlatList 
            data={promocao.listaP}
            renderItem={Item}
            extractorKey={({nome})=>{nome}}
            ListHeaderComponent={()=>{
                return <>
                    <BarraPesquisa onPesquisa={handlePesquisa} />
                </>
            }}
        />
    </>
}






const estilos = StyleSheet.create({
    bemvindo:{
        fontSize: 20,
        color: "black",
    },

    
})




// export default function Cardapio({topo, detalhes, itens}){
//     // return <ScrollView>
//     //     <Topo {...topo}/>
//     //     <Descricao {...detalhes}/> 
//     //     <Itens {...itens} />
//     // </ScrollView>
//     return <>
//         <FlatList
//             data={itens.lista}
//             renderItem={Item}
//             extractorKey={({nome})=>{nome}}
//             ListHeaderComponent={()=>{
//                 return <>
//                     <Topo {...topo}/>
//                     <Descricao {...detalhes}/>
//                     <Texto style={estilos.titulo}>{itens.titulo}</Texto>
//                 </>
//             }}
//         />
//     </>
// }

