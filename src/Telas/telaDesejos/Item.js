import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import Texto from "../../Components/Texto";
import CampoInteiro from "../../Components/CampoInteiro";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Item ({id ,nome, descricao, preco, qtde: qtdeInicial}){

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);


    const removeItem = async (idItem) => {
        console.log(idItem);
        const pedidosArray = [];
        try {
            const dadosProdutos = await AsyncStorage.getItem('pedidos');

            if (dadosProdutos) {
                let pedidosArray = JSON.parse(dadosProdutos);

                if (!Array.isArray(pedidosArray)) {
                    pedidosArray = [pedidosArray];
                }
                console.log(idItem);
                console.log(pedidosArray);
                const index = pedidosArray.findIndex(item => item.id === idItem);

                if (index !== -1) {
                    pedidosArray.splice(index, 1);
                }
                console.log(pedidosArray);
                await AsyncStorage.setItem('pedidos', JSON.stringify(pedidosArray));
                console.log('Produto removido com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao tentar puxar o pedido:', error);
        }
    };

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

   

    return <> 
        <View style={estilos.produtos} >
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
        </View>
        {
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
               <Texto>Quantidade </Texto>
               <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Total </Texto>
                <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total) }</Texto>
            </View>
            <Button title="Remover" onPress={() => removeItem(id)}/>
        </View>
        }
        <View style={estilos.divisor}/>
    </>
}


const estilos = StyleSheet.create({
    nome: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20,
    },
    descricao: {
        color: 'black',
        fontSize: 16,
    },
    preco: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    produtos: {
        padding: 24,
    },
    listadesejos:{
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
    }
});