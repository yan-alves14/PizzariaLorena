import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from "react-native";
import axios from "axios";

const getAddress = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        return data = response.data;
        
    } catch (error) {
        console.log("Erro na requisição: ", error);
        return "CEP não encontrado";
    }
};

export default getAddress;
