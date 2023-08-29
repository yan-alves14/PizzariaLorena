import React, { useState } from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import lupa from '../../../../assets/imgCardapio/lupa.png'

function BarraPesquisa({ onPesquisa }) {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const handlePesquisa = () => {
        onPesquisa(termoPesquisa);
    };

    const atualiza = (novoValor, acaoRetorno) =>{
        const verificaInteiro = novoValor.match();
        if(!verificaInteiro) return;
    }

    const nroTexto = String(valor);

    return (
        <View style={styles.barraPesquisa}>
            <Image source={lupa} style={styles.iconeLupa}></Image>
            <TextInput
                style={styles.input}
                value={termoPesquisa}
                onChangeText={setTermoPesquisa}
                placeholder="Pesquisar..."
                placeholderTextColor="#b9b9b9"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    barraPesquisa: {
        display: 'flex',
        backgroundColor: '#E4E4E4',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        width: 345,
    },
    input: {
        flex: 1,
        color: 'black',
    },
    iconeLupa: {
        width: 30,
        height: 30,
        marginRight: 10, 
    },

});

export default BarraPesquisa;
