import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from "react-native";
import getAddress from "../../../../Services/GetCEP";

export default function CadastraEnderecoPage({ nomePerfil, listaOpcoes }) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState({});

    async function fetchAddress() {
        const result = await getAddress(cep);
        setAddress(result);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <View style={styles.inputCep}>
                    <TextInput placeholder="Digite o seu CEP" value={cep} onChangeText={text => setCep(text)} keyboardType="numeric" />
                </View>
                <TouchableOpacity style={styles.btnBuscaCep} onPress={fetchAddress}>
                    <Text style={styles.btnText}> Buscar endereço</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hrL}></View>

            <View style={styles.containerInfo}>
                <View style={styles.caixa}>
                    <Text style={styles.infoName}>Logradouro:</Text>
                    <Text style={styles.caixaDeTexto}>{address.logradouro}</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.infoName}>Bairro:</Text>
                    <Text style={styles.caixaDeTexto}>{address.bairro}</Text>
                </View>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    hrL: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        marginVertical: 10,
    },
    inputCep: {
        backgroundColor: '#DCDCDC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        padding: 10,
    },
    containerInput: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    btnBuscaCep: {
        backgroundColor: '#FFA500',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF4500',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 10,
    },
    btnText: {
        textAlign: 'center',
    },
    containerInfo: {
        marginVertical: 10,
    },
    caixa: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
    },
    infoName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    caixaDeTexto: {
        backgroundColor: '#DCDCDC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        color: '#808080',
    },
});
