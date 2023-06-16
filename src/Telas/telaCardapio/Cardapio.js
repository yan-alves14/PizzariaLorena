import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";

//Componentes padroes
import Texto from "../../Components/Texto";

// Componentes cardapio / botao, barra de pesquisa
import BarraPesquisa from "./Components/Pesquisa";
import Item from "./Components/itemPromo";



export default function Cardapio({ promocao, sabores }) {
  const handlePesquisa = (termoPesquisa) => {
    // Lógica de pesquisa aqui
    console.log("Pesquisar por:", termoPesquisa);
  };

  const renderItem = ({ item }) => {
    return <Text>{item.nome}</Text>;
  };

  return (
    <>
      <FlatList
        data={promocao.listaP}
        renderItem={Item}
        extractorKey={({ nome }) => {
          nome;
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <BarraPesquisa onPesquisa={handlePesquisa} />
            </>
          );
        }}
      />

    </>
  );
}

const estilos = StyleSheet.create({
  bemvindo: {
    fontSize: 20,
    color: "black",
  },
});

