import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from "react-native";
export default function Config() {


    return <View>
        <View style={styles.containerInfo}>
                <View style={styles.caixa}>
                    <Text style={styles.caixaDeTexto}>Alterar nome de usario</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.caixaDeTexto}>Cardapio</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.caixaDeTexto}>Promoções</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.caixaDeTexto}>Sistema</Text>
                </View>
            </View>
    </View>
}
const styles = StyleSheet.create({
    hrL: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        marginVertical: 10,
    },
    containerInfo: {
        marginVertical: 10,
    },
    caixa: {
        marginVertical:0,
        padding: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 2,
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