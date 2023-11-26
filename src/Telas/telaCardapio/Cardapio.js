import React, {useState} from "react";
// import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Button, View } from "react-native";

//Componentes padroes
import Texto from "../../Components/Texto";

// Componentes cardapio / botao, barra de pesquisa
import BarraPesquisa from "./Components/Pesquisa";
import Item from "./Components/itemPromo";

//Tela
import Produtos from "./TelaProdutos/Produtos"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cardapio({ promocao, sabores }) {
  const [mostrarProdutos, setMostrarProdutos] = useState(false);
  const handlePesquisa = (termoPesquisa) => {
    // Lógica de pesquisa aqui
    console.log("Pesquisar por:", termoPesquisa);
  };

  const renderItem = ({ item }) => {
    return <Text>{item.nome}</Text>;
  };

  const TrocarItens = () => {
    // Navegar para a tela de produtos gerais
    setMostrarProdutos(!mostrarProdutos); // 'ProdutosGerais' é o nome da tela de destino
  };

  return (
    <>
      <BarraPesquisa onPesquisa={handlePesquisa} />
      <Button title={mostrarProdutos ? "Descontos" : "Todos os Produtos"} onPress={TrocarItens} />
      {mostrarProdutos ? (
        <FlatList
          data={promocao.listaP}
          renderItem={Item}
          extractorKey={({ nome }) => nome}
        />
      ) : (
        <Produtos {...sabores} />
      )}
    </>
  );
}

const estilos = StyleSheet.create({
  bemvindo: {
    fontSize: 20,
    color: "black",
  },
});

