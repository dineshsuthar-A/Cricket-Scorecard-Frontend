import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./components/Home";
import { CreateTeam1 } from "./components/CreateTeam1";
const Stack = createNativeStackNavigator();
import { View, Text } from "react-native";
import { CreateTeam2 } from "./components/CreateTeam2";
import Toss from "./components/Toss";
import SelectBowler from "./components/SelectBowler";
import SelectBatsman from './components/SelectBatsman';
import Search from './components/Search';
import Match from "./components/Match";
import axios from "axios";
axios.defaults.baseURL = "http://192.168.149.158:5000/api/";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }}
          name="Home"
          component={Home} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register} />

        <Stack.Screen name="CreateTeam1" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Create Team 1',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={CreateTeam1} />

        <Stack.Screen name="CreateTeam2" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Create Team 2',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={CreateTeam2} />

        <Stack.Screen name="Toss" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Toss',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={Toss} />

        <Stack.Screen name="SelectBatsman" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Select Opening Batsman',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={SelectBatsman} />
        <Stack.Screen name="Search" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Search',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={Search} />


        <Stack.Screen name="Selectbowler" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Select Bowler',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={SelectBowler} />
        <Stack.Screen name="match" options={{
          headerStyle: {
            backgroundColor: '#ff3e3f'
          },
          title: 'Match',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          }
        }} component={Match} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
