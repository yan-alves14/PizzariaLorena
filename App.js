import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { SafeAreaView, View, Image, StatusBar} from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';

import pizzaIcon from './assets/tabIcons/pizza.png';
import pizzaOutline from './assets/tabIcons/pizza-outline.png';
import home from './assets/tabIcons/home.png';
import homeOutline from './assets/tabIcons/home-outline.png';
import chatbubbles from './assets/tabIcons/chatbubbles.png';
import chatbubblesOutline from './assets/tabIcons/chatbubbles-outline.png';
import person from './assets/tabIcons/person.png';
import personOutline from './assets/tabIcons/person-outline.png';
import ticket from './assets/tabIcons/ticket.png';
import ticketOutline from './assets/tabIcons/ticket-outline.png';

//mock
import pizza from './mock/pizzaCdp.js'

import Header from './src/Components/Header';

import perfil from './mock/itensPerfil.js'

//Pages
import HomePage from './src/Telas/Home/index.js';
import Cardapio from './src/Telas/telaCardapio/Cardapio.js';
import Produtos from './src/Telas/telaCardapio/TelaProdutos/Produtos';
import Cupom from './src/Telas/telaCupom/Cupom.js';
import Contato from './src/Telas/telaContato/Contato.js';
import Perfil from './src/Telas/telaPerfil/Perfil.js';
import Desejos from './src/Telas/telaDesejos/Produtos';

function MenuHome(){
  return <SafeAreaView>
            <HomePage/>
        </SafeAreaView>;
}
function MenuCardapio(){
  return <SafeAreaView>
            <Cardapio {...pizza}/>
        </SafeAreaView>;
}
function MenuContato(){
  return <SafeAreaView>
          <Contato/>
        </SafeAreaView>
}

function MenuCupons(){
  return <SafeAreaView>
          <Cupom/>
        </SafeAreaView>
}
function MenuPerfil(){
  return <SafeAreaView>
          <Perfil {...perfil}/>
          <StatusBar/>
        </SafeAreaView>
}


function MenuCarrinho(){
  return <SafeAreaView>
          <Desejos /> 
          <StatusBar/>
        </SafeAreaView>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header/>,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          // You can return any component that you like here!
          //return <Ionicons name={iconName} size={size} color={color} />;
          if (route.name === "Home") {
            iconSource = focused ? home : homeOutline;
          } else if (route.name === "Cardapio") {
            iconSource = focused ? pizzaIcon : pizzaOutline;
          } else if (route.name === "Cupons") {
            iconSource = focused ? ticket : ticketOutline;
          } else if (route.name === "Contato") {
            // Substitua pelo ícone personalizado correspondente
            iconSource = focused ? chatbubbles : chatbubblesOutline;
          } else if (route.name === "Perfil") {
            // Substitua pelo ícone personalizado correspondente
            iconSource = focused ? person : personOutline;
          } else if (route.name === "TesteTelaSoProdutos") {
            // Substitua pelo ícone personalizado correspondente
            iconSource = focused ? ticket : ticketOutline;
          } else if (route.name === "TesteTelaSoDesejo") {
            // Substitua pelo ícone personalizado correspondente
            iconSource = focused ? ticket : ticketOutline;
          } 



          // Renderiza a imagem personalizada
          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: "#B82C21",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={MenuHome} />
      <Tab.Screen name="Cardapio" component={MenuCardapio} />
      {/*<Tab.Screen name="Cupons" component={MenuCupons} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={require('./path-to-your-image.png')} style={{ width: size, height: size, tintColor: color }}/>
        <Tab.Screen name="Contato" component={MenuContato} />*/}
      <Tab.Screen name="Perfil" component={MenuPerfil} />
      <Tab.Screen name="TesteTelaSoDesejo" component={MenuCarrinho} />

    </Tab.Navigator>
  );
}

export default function App() {

//Fonte utilizada para o projeto
const [ fonteCarregada ] = useFonts({
  "MontSerratRegular" : Montserrat_400Regular,
  "MontSerratBold": Montserrat_700Bold,
  "GreatVibes": GreatVibes_400Regular,
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