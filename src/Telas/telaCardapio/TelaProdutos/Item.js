import React, { useState, useEffect } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from  'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Texto from "../../../Components/Texto";
import CampoInteiro from "../../../Components/CampoInteiro";
import soundCoin from "../../../../assets/sound/coinSound.mp3";

export default function Item ({nome, descricao, preco, imagem}){

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);
    const [audioStatus, setAudioStatus] = useState(false)
    const [sound, setSound] = useState(new Audio.Sound());

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    const inverterExpandir = () => {
        setExpandir(!expandir);
        atualizaQtdeTotal(1);
    }
    async function salveStorage(quantidade, total) {
        let pedidos = [];  // Inicializa pedidos como um array

        try {
            const pedidosAntigos = await AsyncStorage.getItem('pedidos');

        if (pedidosAntigos) {
            // Se existirem pedidos antigos, convertemos para array
            pedidos = JSON.parse(pedidosAntigos);
      
            // Certificamo-nos de que pedidos é um array, mesmo que tenha sido um objeto antes
            if (!Array.isArray(pedidos)) {
                pedidos = [pedidos];
            }
        }

        console.log('Pedidos existentes:', pedidos);
        
        if (pedidos.length !== 0) {
            const ultimoPedido = pedidos[pedidos.length - 1];
            const ultimoPedidoId = ultimoPedido.id;
      
            console.log('ID do último pedido:', ultimoPedidoId);
      
            const novoPedido = {
                id: ultimoPedidoId + 1,
                nome: nome,
                preco: preco,
                descricao: descricao,
                qtde: quantidade,
                vlTotal: total,
            };

            pedidos.push(novoPedido);

            console.log('Novo pedido:', novoPedido);
            console.log('BD atualizado:', pedidos);

            await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
            console.log('Pedido salvo com sucesso!');
        } else {
            console.log('Novo item');
            console.log('ID 1: ');

            const pedidoNw = {
                id: 1,
                nome: nome,
                preco: preco,
                descricao: descricao,
                qtde: quantidade,
            };

            console.log(pedidoNw);
            await AsyncStorage.setItem('pedidos', JSON.stringify([pedidoNw]));
        }
        } catch (error) {
            console.error('Erro ao salvar o pedido:', error);
        }
        //AsyncStorage.clear()
        console.log('\n\n ===================\n\n');
    }

    useEffect (() => 
    {
        (async () => 
        {
            console.log('status', audioStatus)
            if (audioStatus)
            {
                await sound.loadAsync(require("../../../../assets/sound/coinSound.mp3"));
            try 
            { 
                await sound.playAsync();
            } 
            catch (e)   
            { 
                console.log(e);
            }
        }
        else 
        {
            await sound.stopAsync()
            await sound.unloadAsync()
        }
        })()
        },[audioStatus]);

    return <> 
        <TouchableOpacity style={styles.produtos} onPress={inverterExpandir}>
            <Texto style={styles.nome}>{nome}</Texto>
            <Texto style={styles.descricao}>{descricao}</Texto>
            <Image source={imagem}></Image>
            <Texto style={styles.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
        </TouchableOpacity>
        { expandir &&
        <View style={styles.listadesejos}>
            <View style={styles.posicao}>
               <Texto>Quantidade </Texto>
               <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal}/>
            </View>
            <View style={styles.posicao}>
                <Texto>Total </Texto>
                <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total) }</Texto>
            </View>
            <Button title="Adicionar" onPress={()=>{setAudioStatus(!audioStatus); salveStorage(quantidade, total);}}/>
        </View>
        }
        <View style={styles.divisor}/>
    </>
}


const styles = StyleSheet.create({
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