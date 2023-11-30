import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from "react-native";
import axios from "axios";

const getAddress = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        return `CEP: ${data.cep}, Logradouro: ${data.logradouro}, Bairro: ${data.bairro}, Cidade: ${data.localidade}, Estado: ${data.uf}`;
    } catch (error) {
        console.log("Erro na requisição: ", error);
        return "CEP não encontrado";
    }
};

export default getAddress;
