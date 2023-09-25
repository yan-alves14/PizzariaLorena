import React, { useState, useEffect } from "react";
import { View, Image, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from  'expo-av';


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
            <Button title="Adicionar" onPress={()=>setAudioStatus(!audioStatus)}/>
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