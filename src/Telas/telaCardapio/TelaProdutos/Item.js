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
    async function salveStorage(quantidade){
        let pedidos = [];
        try 
        {
            // Obter a lista atual de pedidos do AsyncStorage
            const pedidosAntigos = await AsyncStorage.getItem('pedidos');
            if(pedidosAntigos){
                pedidos.push(JSON.parse(pedidosAntigos));
            } 
            console.log(pedidos.length);
            console.log(pedidos);

            if( pedidos )
            {

                let ultimoPedido = pedidos.find();
                let ultimoPedidoId = ultimoPedido.id;

                console.log(ultimoPedido);
                console.log(ultimoPedidoId);

                let pedido ={
                    id: ultimoPedidoId + 1,
                    nome: nome,
                    preco: preco,
                    descricao: descricao,
                    qtde: quantidade,
                }
                // Adicionar o novo pedido à lista
                pedidos.push(pedido);
                
                console.log(pedidos);
                    // Salvar a lista atualizada de pedidos no AsyncStorage
                //await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
                console.log('Pedido salvo com sucesso!');
                }
                else
                {
                    let pedidoNw ={
                        id: 1,
                        nome: nome,
                        preco: preco,
                        descricao: descricao,
                        qtde: quantidade,
                    }
                    console.log(pedidoNw);
                    // await AsyncStorage.setItem('pedidos', JSON.stringify(pedidoNw));
            }
        } catch (error) {
            console.error('Erro ao salvar o pedido:', error);
        }

        const veja = await AsyncStorage.getItem('pedidos');
        const jj = pedidosAntigos ? JSON.parse(pedidosAntigos) : [];
        console.log(jj);
    };

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
        <TouchableOpacity style={estilos.produtos} onPress={inverterExpandir}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Image source={imagem}></Image>
            <Texto style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
        </TouchableOpacity>
        { expandir &&
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
               <Texto>Quantidade </Texto>
               <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Total </Texto>
                <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total) }</Texto>
            </View>
            <Button title="Adicionar" onPress={()=>{setAudioStatus(!audioStatus); salveStorage(quantidade);}}/>
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