
import React, { useState, useEffect } from "react";
import { Image, ScrollView, Button, TouchableOpacity, Text, View, StyleSheet, Dimensions } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

import perfilImg from "../../../assets/imgPerfil/perfilImg1.png";
import Texto from "../../Components/Texto";

const widthTela = (Dimensions.get('screen').width) / 1.5;
const heightTela = widthTela;
export default function HomePage({ nomePerfil, listaOpcoes }) {
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
                            <Text>Olá, {nomePerfil}</Text>
                        </View>
                    </View>
        

                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
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






// import React, {useState,  useEffect}  from "react";
// import { Image, ScrollView, Button , TouchableOpacity, Text, View, StyleSheet, Dimensions } from "react-native";
// import { Camera, CameraType } from 'expo-camera';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import perfilImg from "../../../assets/imgPerfil/perfilImg1.png";
// import Texto from "../../Components/Texto";

// const widthTela = (Dimensions.get('screen').width) / 1.5;
// const heightTela = widthTela ;
// export default function HomePage({nomePerfil, listaOpcoes }) {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [cameraVisible, setCameraVisible] = useState(true);

//   const cameraRef = React.useRef(null);
//     if (!permission) {
//         return <View />;
//     }
    
//     if (!permission.granted) {
//         return (
//         <View style={styles.container}>
//             <Text style={{ textAlign: 'center' }}>Por favor, autorize a utilização da sua camera.</Text>
//             <Button onPress={requestPermission} title="Autorizar o uso da camera" />
//         </View>
//         );
//     }
    
//     const tirarFoto = async () => {
//         if (cameraRef.current) {
//             const { uri } = await cameraRef.current.takePictureAsync();
//             console.log("tirou foto");
//             setCapturedImage(uri);
//             console.log(uri);
//            //Guarda a imagem no AsyncStorage
//             await AsyncStorage.setItem('Foto', uri);
//             setCameraVisible(false);
//         }
        
//     }
    
//     function toggleCameraType() {
//         setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//     }

//     function liberarCamera() {
//       setCapturedImage(null); // Limpar a imagem capturada
//       setCameraVisible(true); // Mostrar a câmera novamente
//     }


//     return (
//       <View>
//         {/* {cameraVisible ? ( */}
//         {capturedImage ? (
          
//           <View style={styles.containerTirarFoto}>
//             <Camera style={styles.camera} type={type} ref={cameraRef}>
//               <View></View>
//             </Camera>
//             {capturedImage && (
//               <Image source={{ uri: capturedImage }} style={styles.fotoTirada}></Image>
//             )}
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//                 <Text style={styles.text}>Alternar Camera</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.button} onPress={tirarFoto}>
//                 <Text style={styles.text}>Tirar Foto</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ) : (
//           <View style={styles.conteinerPerfil}>
//             <View style={styles.telaPerfil}>
//               <TouchableOpacity onPress={liberarCamera}>
//                 <Image
//                   source={
//                     capturedImage ? { uri: capturedImage } : perfilImg
//                   }
//                   style={styles.portraideImage}
//                 ></Image>
//               </TouchableOpacity>
//               <View style={styles.nomePerfil}>
//                 <Text>Olá, {nomePerfil}</Text>
//               </View>
//             </View>
//           </View>
//         )}
//       </View>
//     );
//   }


//     return (
        
//         <View>
//             <View  style={styles.containerTirarFoto}>
//                 <Camera style={styles.camera} type={type} ref={cameraRef}>
//                     <View>

//                     </View>
//                 </Camera>
//                 {capturedImage && <Image source={{uri: capturedImage}} style={styles.fotoTirada}></Image>}
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//                         <Text style={styles.text}>Alternar Camera</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={tirarFoto}>
//                         <Text style={styles.text}>Tirar Foto</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             {/* Perfil in */}
//             <View style={styles.conteinerPerfil}>
//                 <View style={styles.telaPerfil}>
//                     <TouchableOpacity onPress={liberarCamera}>
//                         <Image source={ capturedImage ? { uri: capturedImage } : perfilImg } style={styles.portraideImage}></Image>
//                     </TouchableOpacity>
//                     <View style={styles.nomePerfil}>
//                         <Text>Olá, {nomePerfil}</Text>
//                     </View>
//                 </View>
//             </View>
//         </View> 

//     );
// }

// const styles = StyleSheet.create({
//     fotoTirada:{
//         flex: 1,
//         height: '40%'
//     },
    
//     text:{
//         color: 'red',
//     },
//     camera:{
//         height: '70%',
//         width: '100%'
//     },
//     telaPerfil:{
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: "10%",
//     },
//     portraideImage:{
//         width: widthTela,
//         height: heightTela,
//         borderRadius: 1360,
//     }
// });
{/* <View style={styles.telaPerfil}>Elemento da imagemd de perfil
                <Image source={perfilImg} style={styles.portraideImage}></Image>
                <View style={styles.nomePerfil}>
                    <Texto>Olá, {nomePerfil}</Texto>
                </View>
            </View> */}


/*
import React, {useState,  useEffect} from 'react';
import { View, StyleSheet, Image, Button , TouchableOpacity, Text} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Camera() {

  //CAMERA
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = React.useRef(null);

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
      //Guarda a imagem no AsyncStorage
      await AsyncStorage.setItem('Foto', uri);
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Alternar Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={tirarFoto}>
            <Text style={styles.text}>Tirar Foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedImage && <Image source={{uri: capturedImage}} style={{flex: 1}}></Image>}
    </View>
  );
} 

*/