import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // Importando os ícones
import HomeScreen from "./src/screens/HomeScreen";
import UserDetailsScreen from "./src/screens/UserDetailsScreen";
import AboutScreen from "./src/screens/AboutScreen";
import EditUserScreen from "./src/screens/EditUserScreen";
import AddUserScreen from "./src/screens/AddUserScreen";
import MapScreen from './src/screens/MapScreen';
import SchedulePickupScreen from './src/screens/SchedulePickupScreen';
import UserPanelScreen from './src/screens/UserPanelScreen';
import RecyclingInfoScreen from './src/screens/RecyclingInfoScreen';


// Definindo os parâmetros que as telas esperam
type RootStackParamList = {
  Home: undefined;
  UserDetails: { userId: number };
  EditUser: { userId: number };
  AddUser: undefined;
  Tabs: undefined;
  MapScreen: undefined;
  SchedulePickupScreen: undefined;
  UserPanelScreen: undefined;
  RecyclingInfoScreen: undefined;
};

// Criando o Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" color={color} size={size} />
          ),
          tabBarLabel: "Sobre",
        }}
      />
    </Tab.Navigator>
  );
};

// Criando o Stack Navigator para as telas Home, UserDetails, AddUser e as novas telas
const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: "Detalhes do Usuário" }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUserScreen}
        options={{ title: "Editar Usuário" }}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{ title: "Criar Novo Usuário" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Pontos de Descarte" }}
      />
      <Stack.Screen
        name="SchedulePickupScreen"
        component={SchedulePickupScreen}
        options={{ title: "Agendar Coleta" }}
      />
      <Stack.Screen
        name="UserPanelScreen"
        component={UserPanelScreen}
        options={{ title: "Painel do Usuário" }}
      />
      <Stack.Screen
        name="RecyclingInfoScreen"
        component={RecyclingInfoScreen}
        options={{ title: "Informações sobre Reciclagem" }}
      />
    </Stack.Navigator>
  );
};

// Criando o Drawer Navigator para Home, About, e Tabs
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="HomeStack" component={HomeStackNavigator} options={{ title: "Início" }} />
        <Drawer.Screen name="About" component={AboutScreen} options={{ title: "Sobre" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
