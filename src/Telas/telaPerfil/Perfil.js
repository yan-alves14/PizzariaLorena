import React from "react";
import { Image, ScrollView, View, StyleSheet, Dimensions } from "react-native";

import perfilImg from "../../../assets/imgPerfil/perfilImg1.png";
import Texto from "../../Components/Texto";

const widthTela = (Dimensions.get('screen').width) / 1.5;
const heightTela = widthTela ;
export default function HomePage({nomePerfil, listaOpcoes }) {
    return (
        <ScrollView >
             <View style={styles.telaPerfil}>{/* Elemento da imagemd de perfil */}
                <Image source={perfilImg} style={styles.portraideImage}></Image>
                <View style={styles.nomePerfil}>
                    <Texto>Olá, {nomePerfil}</Texto>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    telaPerfil:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
    },
    portraideImage:{
        width: widthTela,
        height: heightTela,
        borderRadius: 1360,
    }
});
