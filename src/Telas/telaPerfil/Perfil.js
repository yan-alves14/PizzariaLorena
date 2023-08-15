import React from "react";
import { Image, ScrollView, View,StyleSheet } from "react-native";

import perfilImg from "../../../assets/imgPerfil/perfilImg.png";
import Texto from "../../Components/Texto";

export default function HomePage() {
    return (
        <ScrollView >
             <View style={styles.portraideImage}>{/* Elemento da imagemd de perfil */}
                <Image source={perfilImg}></Image>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    portraideImage:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
    },

});
