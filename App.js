import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

//mock
import pizza from './mock/pizzaCdp.js'

//Pages
import HomePage from './src/Telas/Home/index.js';
import Cardapio from './src/Telas/telaCardapio/Cardapio.js';

function MenuHome(){
  return <SafeAreaView>
            <HomePage/>
            <StatusBar/>
        </SafeAreaView>;
}
function MenuCardapio(){
  return <SafeAreaView>
            <Cardapio {...pizza}/>
            <StatusBar/>
        </SafeAreaView>;
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cardapio') {
              iconName = focused 
                ? 'pizza' 
                : 'pizza-outline';
            } else if (route.name === 'Cupons') {
              iconName = focused 
                ? 'camera' 
                : 'camera-outline';
            } else if (route.name === 'Contato') {
              iconName = focused 
                ? 'camera' 
                : 'camera-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused 
                ? 'camera' 
                : 'camera-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={MenuHome} /> 
        <Tab.Screen name="Cardapio" component={MenuCardapio} /> 
        
        
        {/* <Tab.Screen name="Imagens" component={Imagens} />  */}
      </Tab.Navigator>
  );
}

export default function App() {

//Fonte utilizada para o projeto
const [ fonteCarregada ] = useFonts({
  "MontSerratRegular" : Montserrat_400Regular,
  "MontSerratBold" : Montserrat_700Bold,
});

  //Checa se as fontes já foram carregadas antes de exibir no APP
  if(!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu/>
    </NavigationContainer>
  );
}