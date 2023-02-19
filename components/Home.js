import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Main from './Main';
import CreateMatch from './CreateMatch';
import YourMatches from './YourMatches';
import AllMatch from './AllMatch';
import { useState } from 'react';
import Api from "./Api/Api";
import * as SecureStore from 'expo-secure-store';
import { useFocusEffect } from '@react-navigation/native';
const drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    const [name, setName] = useState("");
    const [mobile, setmobile] = useState("");

    const callApi = async () => {
        const token = await SecureStore.getItemAsync("token");
        if (!(token))

            props.navigation.navigate("Login");
        else {
            Api.user().then((response) => {
                setName(response.data.name);
                setmobile(response.data.mobile);
            }).catch((err) => {
                console.log("err", err);
            });
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            callApi();
        }, []));

    const deletetoken = async () => {
        await SecureStore.deleteItemAsync("token");
        props.navigation.navigate("Login");
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#ff3e3f" }} >
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>{name}</Text>
                    <Text style={{ color: "white", }}>+91-{mobile}</Text>
                </View>

                <View style={{ backgroundColor: "white" }}>
                    <DrawerItemList {...props} />
                </View>
                <View style={{ backgroundColor: "white", paddingLeft: 20, paddingTop: 10, borderTopWidth: 1 }}>
                    <TouchableOpacity onPress={deletetoken} ><Text style={{ color: "grey" }}>Logout</Text></TouchableOpacity>
                </View>
            </DrawerContentScrollView >
        </View>
    )
}


export function Home({ navigation }) {
    const goback = () => {
        navigation.navigate("Login");
    }
    return (
        <drawer.Navigator
            initialRouteName="Main"
            drawerContent={(props) => <CustomDrawer {...props} />}
            drawerPosition='left'
            drawerType="front"
            edgeWidth={50}

            hideStatusBar={true}
            screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#ff3e3f'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            }
            }>
            <drawer.Screen name='CrickCard' component={Main} options={{ drawerLabel: "Home", drawerActiveTintColor: "red" }} />
            <drawer.Screen name="Create Match" component={CreateMatch} options={{ drawerLabel: "Create Match", drawerActiveTintColor: "red" }} />
            <drawer.Screen name="Your Matches" component={YourMatches} options={{ drawerLabel: "Your Matches", drawerActiveTintColor: "red" }} />
            <drawer.Screen name="All Matches" component={AllMatch} options={{ drawerLabel: "All Matches", drawerActiveTintColor: "red" }} />

        </drawer.Navigator >
    )
}