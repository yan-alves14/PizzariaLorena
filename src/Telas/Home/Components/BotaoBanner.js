import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function BotaoBanner({titulo, textoPreto, textoLaranja, imagem}) {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text>OI TESTANDO</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: "90%",
        height: 100,
        backgroundColor: "#000" 
    }
})    