import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function BarraPesquisa({ onPesquisa }) {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const handlePesquisa = () => {
        onPesquisa(termoPesquisa);
    };

    return (
        <View style={styles.barraPesquisa}>
            <TextInput
                style={styles.input}
                value={termoPesquisa}
                onChangeText={setTermoPesquisa}
                placeholder="Pesquisar..."
                placeholderTextColor="lightgray"
            />
      {/* Adicione o ícone de pesquisa ou botão aqui */}
        </View>
    );
}

const styles = StyleSheet.create({
    barraPesquisa: {
        backgroundColor: 'lightgray',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        width: 345,
    },
    input: {
        color: 'black',
    },
});

export default BarraPesquisa;
