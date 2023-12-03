import React,{useState, useEffect} from "react";
import { FlatList, SafeAreaView, View, Image, StyleSheet,TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Texto from "../../Components/Texto";
import Item from './Item';
import StatusListaDesejo from "../../Components/statusCarrinho/index"
import atualizar from "../../../assets/imgCarrinho/atualizar.png"
import { Button } from "react-native";

export default function listaDesejos (){
    const [produto, setProduto] = useState([]);
    const [total, setTotal] = useState(0);
    
    async function concluir () {
        try{
        AsyncStorage.clear();
        console.log("Pedido concluido");
        }
        catch(error)
        {
            console.log("erro ao concluir o pedido: " + error)
        }
    }

    const obtemProduto = async () => {
        try {
            const dadosProdutos = await AsyncStorage.getItem('pedidos');

            if (dadosProdutos) {
                let pedidosArray = JSON.parse(dadosProdutos);

                if (!Array.isArray(pedidosArray)) {
                    pedidosArray = [pedidosArray];
                }

                setProduto(pedidosArray);

                let soma = 0;
                pedidosArray.forEach(produto => {
                    soma += produto.preco * produto.qtde;
                });

                setTotal(soma);
            }else{
                let pedidosArray = []
                setProduto(pedidosArray);
                setTotal(0)
            }
        } catch (error) {
            console.error('Erro ao tentar puxar o pedido:', error);
        }
    };

    useEffect(() => {
        obtemProduto();
    }, []);

    const recarregar = () => {
        // Função para recarregar os dados
        obtemProduto();
    };

    // const total = pedidos.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);
    console.log(typeof total)
    console.log("total: ", total, "\n\n=========");

    console.log("pedidos: ", produto)
    return <SafeAreaView>
            <TouchableOpacity onPress={recarregar}>
                <Image style={styles.atualiza} source={atualizar} />
            </TouchableOpacity>
            <View style={styles.botao}>
                <Button color="#ffa841" title= "Concluir pedido" onPress={() => concluir()}/>
            </View>
            <StatusListaDesejo total={total} />
            <FlatList
                data={produto}
                renderItem={({ item }) => (<Item {...item} />)}
                keyExtractor={({ id }) => (String(id))}
            />
            </SafeAreaView>
        
}


const styles = StyleSheet.create({
    atualiza:{
        width: 50,
        height: 50,
        marginLeft: 300,
        marginTop: -20,
        marginBottom: 10
        // transform: [{ scale: 0.1 }],
    }

});