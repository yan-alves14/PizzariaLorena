
import React, { useState, useEffect } from "react";
import { Image, ScrollView, Button, TouchableOpacity, Text, View, StyleSheet, Dimensions } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import carrinho from '../../../assets/carrinho.png'
import cartao from "../../../assets/imgPerfil/cartao.png"
import config from "../../../assets/imgPerfil/config.png"
import localiza from "../../../assets/imgPerfil/localizacao.png"
import perfilImg from "../../../assets/imgPerfil/perfilImg1.png";
import Texto from "../../Components/Texto";
import { SafeAreaView } from "react-native";

const widthTela = (Dimensions.get('screen').width) / 1.7;
const heightTela = widthTela;
export default function HomePage({ nomePerfil, listaOpcoes }) {
    const navigation = useNavigation();

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);
    const [showCamera, setShowCamera] = useState(false); // Novo estado para controlar a exibição

    const cameraRef = React.useRef(null);

    useEffect(() => {
        // Verificar se já existe uma imagem capturada no AsyncStorage e configurar o estado em conformidade
        const getStoredImage = async () => {
            const uri = await AsyncStorage.getItem('Foto');
            if (uri) {
                setCapturedImage(uri);
            }
        };

        getStoredImage();
    }, []);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>Por favor, autorize a utilização da sua camera.</Text>
                <Button onPress={requestPermission} title="Autorizar o uso da camera" />
            </View>
        );
    }

    const tirarFoto = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            console.log("tirou foto");
            setCapturedImage(uri);
            console.log(uri);
            // Guarda a imagem no AsyncStorage
            await AsyncStorage.setItem('Foto', uri);
        }
        setShowCamera(false);
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    function liberarCamera() {
        console.log('ir camera');
        setShowCamera(true);
    }

    function cancelar(){
      setShowCamera(!showCamera);
    }
    function telaCadastroEndereco(){
      navigation.navigate('Endereco');
    }
    function telaCarrinho(){
      navigation.navigate('Carrinho');
    }
    function telaConfig(){
      navigation.navigate('Config');
    }

    return (
        <View>
            {showCamera ? (
                <View style={styles.containerTirarFoto}>
                  <Camera style={styles.camera} type={type} ref={cameraRef}>
                      <View>
                      </View>
                  </Camera>
                    {capturedImage && <Image source={{ uri: capturedImage }} style={styles.fotoTirada}></Image>}
                  <View style={styles.buttonContainer}>
                    <View style={[styles.button, styles.buttonBlue]}>
                      <TouchableOpacity onPress={toggleCameraType}>
                        <Text style={styles.text}>Alternar Camera</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.button, styles.buttonGreen]}>
                      <TouchableOpacity onPress={tirarFoto}>
                        <Text style={styles.text}>Tirar Foto</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.button, styles.buttonRed]}>
                      <TouchableOpacity onPress={cancelar}>
                        <Text style={styles.text}>Cancelar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            ) : (
                <View style={styles.conteinerPerfil}>
                    <View style={styles.telaPerfil}>
                        <TouchableOpacity onPress={liberarCamera}>
                            <Image source={capturedImage ? { uri: capturedImage } : perfilImg} style={styles.portraideImage}></Image>
                        </TouchableOpacity>
                        <View style={styles.nomePerfil}>
                            <Text></Text>
                        </View>
                    </View>
                    <View style={styles.spaceTOP} />
                    <View style={styles.gridTemplate}>
                    <TouchableOpacity style={styles.btnTrocaTela} onPress={telaCadastroEndereco}>
                        <View>
                          <Image source={localiza} style={styles.image}></Image>
                          <Text style={styles.titleEnde}>Endereço</Text>
                          <Text style={styles.paragraph}></Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btnTrocaTela} onPress={telaConfig}>
                        <View>
                          <Image source={config} style={styles.image}></Image>
                          <Text style={styles.titleConfig}>Configuração</Text>
                          <Text style={styles.paragraph}></Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btnTrocaTela} onPress={telaCarrinho}>
                        <View>
                          <Image source={carrinho} style={styles.imageCar}></Image>
                          <Text style={styles.titleEnde}>Carrinho</Text>
                          <Text style={styles.paragraph}></Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  imageCar:{
    marginTop: "15%",
    marginLeft:"10%",
    marginRight:"10%",
    height: "70%",
    width: "70%"
  },
  image:{
    marginTop: "10%",
    marginLeft:"10%",
    marginRight:"10%",
    height: "60%",
    width: "80%"
  },
  titleEnde:{
    
    paddingTop: "10%",
  },
  titlePaga:{
    fontSize: 10,
    paddingTop: "10%"
  },
  titleConfig:{
    fontSize: 10,
    paddingTop: "10%",
  },
  gridTemplate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Isso vai distribuir os botões uniformemente
    marginHorizontal: '5%',
  },

  btnTrocaTela: {
    width: '30%', // Ajuste conforme necessário
    height: 100,
    backgroundColor: "#eaeaea",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d7d7d7",
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "center",
    padding: 15,
    marginVertical: 10, // Adicione um espaçamento vertical entre os botões
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10, // Adiciona sombra no Android
  },
  spaceTOP: {
    borderColor: '#DCDCDC',
    //borderWidth: 1,
    borderBottomWidth: 1,
    height: 0,
    margin: 15,

  },
  buttonContainer: {
    marginLeft: '5%',
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttonBlue: {
    backgroundColor: 'blue',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  fotoTirada: {
      flex: 1,
      height: '40%'
  },
  conteinerPerfil: {
      display: 'flex',
   
  },
  containerTirarFoto: {
      display: 'flex'
  },
  text: {
      color: 'whiteq3',
  },
  camera: {
      height: '70%',
      width: '100%'
  },
  telaPerfil: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10%",
  },
  portraideImage: {
      width: widthTela,
      height: heightTela,
      borderRadius: 1360,
  }
});




