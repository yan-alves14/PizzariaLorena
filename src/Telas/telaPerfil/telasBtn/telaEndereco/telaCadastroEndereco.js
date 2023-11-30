import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import getAddress from "../../../../Services/GetCEP";

export default function CadastraEnderecoPage({ nomePerfil, listaOpcoes }) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");

    async function fetchAddress() {
        const result = await getAddress(cep);
        setAddress(result);
        console.log(result);
    }

    return (
        <View>
            <TextInput placeholder="Digite o seu CEP" value={cep} onChangeText={text => setCep(text)} keyboardType="numeric" />
            <Button title="Buscar endereço" onPress={fetchAddress} />
            <Text>{address}</Text>
        </View>
    )
}
