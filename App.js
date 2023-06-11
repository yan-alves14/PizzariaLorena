import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { StatusBar, SafeAreaView, View, Image } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import pizzaIcon from '../PizzariaLorena/assets/tabIcons/pizza.png';
import pizzaOutline from '../PizzariaLorena/assets/tabIcons/pizza-outline.png';
import home from '../PizzariaLorena/assets/tabIcons/home.png';
import homeOutline from '../PizzariaLorena/assets/tabIcons/home-outline.png';
import chatbubbles from '../PizzariaLorena/assets/tabIcons/chatbubbles.png';
import chatbubblesOutline from '../PizzariaLorena/assets/tabIcons/chatbubbles-outline.png';
import person from '../PizzariaLorena/assets/tabIcons/person.png';
import personOutline from '../PizzariaLorena/assets/tabIcons/person-outline.png';
import ticket from '../PizzariaLorena/assets/tabIcons/ticket.png';
import ticketOutline from '../PizzariaLorena/assets/tabIcons/ticket-outline.png';

//mock
import pizza from './mock/pizzaCdp.js'

//Pages
import HomePage from './src/Telas/Home/index.js';
import Cardapio from './src/Telas/telaCardapio/Cardapio.js';
import Cupom from './src/Telas/telaCupom/Cupom.js';
import Contato from './src/Telas/telaContato/Contato.js';
import Perfil from './src/Telas/telaPerfil/Perfil.js';

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
function MenuContato(){
  return <SafeAreaView>
          <Contato/>
          <StatusBar/>
        </SafeAreaView>
}

function MenuCupons(){
  return <SafeAreaView>
          <Cupom/>
          <StatusBar/>
        </SafeAreaView>
}
function MenuPerfil(){
  return <SafeAreaView>
          <Perfil/>
          <StatusBar/>
        </SafeAreaView>
}
const Tab = createBottomTabNavigator();

function TabsMenu(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

          /*if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cardapio') {
              iconName = focused 
                ? 'pizza' 
                : 'pizza-outline';
            } else if (route.name === 'Cupons') {
              iconName = focused 
                ? 'ticket' 
                : 'ticket-outline';
            } else if (route.name === 'Contato') {
              iconName = focused 
                ? 'chatbubbles' 
                : 'chatbubbles-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused 
                ? 'person' 
                : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />; */
            if (route.name === 'Home') {
              iconSource = focused ? home : homeOutline;
            } else if (route.name === 'Cardapio') {
              iconSource = focused ? pizzaIcon : pizzaOutline ;
            } else if (route.name === 'Cupons') {
              iconSource = focused ? ticket : ticketOutline ;
            } else if (route.name === 'Contato') {
              // Substitua pelo ícone personalizado correspondente
              iconSource = focused ? chatbubbles : chatbubblesOutline ;
            } else if (route.name === 'Perfil') {
              // Substitua pelo ícone personalizado correspondente
              iconSource = focused ? person : personOutline ;
            }
          
            // Renderiza a imagem personalizada
            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />; 
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={MenuHome} /> 
        <Tab.Screen name="Cardapio" component={MenuCardapio} />
        <Tab.Screen name="Cupons" component={MenuCupons} />
        <Tab.Screen name="Contato" component={MenuContato} />
        <Tab.Screen name="Perfil" component={MenuPerfil} />
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