import React, { useState, useEffect } from "react";
import {  TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from "react-native";
import getAddress from "../../../../Services/GetCEP";
import {  } from "react-native";

export default function CadastraEnderecoPage({ nomePerfil, listaOpcoes }) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState({});

    async function fetchAddress() {
        const result = await getAddress(cep);
        console.log(result)
        setAddress(result);
        console.log(result);
    }

    return (
        <View>
            <View style={styles.containerInput}>
                <View style={styles.inputCep}>
                    <TextInput placeholder="Digite o seu CEP" value={cep} onChangeText={text => setCep(text)} keyboardType="numeric" />
                </View>
                <TouchableOpacity  style={styles.btnBuscaCep} onPress={fetchAddress}>
                    <Text style={styles.btnText}> Buscar endereço</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hrL}></View>

            <View style={styles.containerInfo}>
                <View style={styles.coluna1}>
                    <View style={styles.caixa}>
                        <Text style={styles.infoName}>Logradouro:</Text>
                        <Text style={styles.caixaDeTexto}>{address.logradouro}</Text>
                    </View>  
                    <View style={styles.caixa}>
                        <Text style={styles.infoName}>Bairro:</Text>
                        <Text style={styles.caixaDeTexto}>{address.bairro}</Text>
                    </View>  
                </View>
                <View style={styles.coluna2}>
                    <View style={styles.caixa}>
                        <Text style={styles.infoName}>Cidade:</Text>
                        <Text style={styles.caixaDeTexto}>{address.localidade}</Text>
                    </View>
                    <View style={styles.caixa}>
                        <Text style={styles.infoName}>Estado:</Text>
                        <Text style={styles.caixaDeTexto}>{address.uf}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    hrL: {
        marginLeft: 50,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        marginRight: 50,
        marginTop: 10,
    },
    inputCep: {
        backgroundColor: '#DCDCDC',
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginRight: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    containerInput: {
        flexDirection: 'row',
        margin: 10,
    },
    btnBuscaCep: {
        backgroundColor: '#FFA500',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1,
        borderColor: '#FF4500',
        justifyContent: 'center',
        padding: 10,
    },
    btnText: {
        textAlign: 'center',
    },
    containerInfo: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center', // Centraliza os elementos na horizontal
    },
    coluna1: {
        marginRight: 15, // Espaçamento entre as colunas
    },
    coluna2: {
        marginLeft: 15, // Espaçamento entre as colunas
    },
    caixa: {
        marginVertical: 5,
        padding: 10,
    },
    infoName: {
        marginBottom: 1,
    },
    caixaDeTexto: {
        backgroundColor: '#DCDCDC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        color: '#808080',
        marginTop: 1,
    },
});