import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity, ToastAndroid } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export function Login({ navigation }) {
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    
    const apiLogin = async () => {
        await axios.post("login", {
            mobile,
            password
        }).then(async (response) => {
            const token = response.data.token;
            ToastAndroid.show("Logged In", ToastAndroid.SHORT);
            await SecureStore.setItemAsync("token", token);
            navigation.navigate("Home");
        }).catch(function (error) {
            ToastAndroid.show("Some Error Occured! Try Again.", ToastAndroid.SHORT);

        });
    }
    useEffect(async () => {
        const token = await SecureStore.getItemAsync("token");
        if (token) {
            navigation.navigate("Home");
        }
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} resizeMode="stretch" style={styles.image}>
                <Text style={styles.textLogin}>Login</Text>
                <TextInput maxLength={10} keyboardType="number-pad" placeholder="Mobile Number" onChangeText={t => setmobile(t)} style={styles.textInputStyle} />
                <TextInput placeholder="Password" style={styles.textInputStyle} onChangeText={t => setpassword(t)} secureTextEntry={true} />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => apiLogin()}>
                    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.textLogins}>Don't have an account?<Text onPress={() => navigation.navigate('Register')} style={styles.button2Style}> Register </Text></Text>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    textLogin: {
        position: "relative",
        top: -100,
        color: "#fff",
        fontFamily: 'sans-serif',
        fontSize: 28,
        fontWeight: 'bold',
    },
    textLogins: {
        color: "black",
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#c5f7fa'
    },
    textInputStyle: {
        width: '80%',
        margin: 10,
        padding: 4,
        backgroundColor: "#fff",
        paddingLeft: 20,
        borderWidth: 0.5,
        borderRadius: 20,
    },
    buttonStyle: {
        width: '80%',
        backgroundColor: '#ff3e3f',
        textAlign: 'center',
        color: 'white',
        margin: 10,
        padding: 8,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
        borderRadius: 20
    },
    button2Style: {
        color: "#ff3e3f",
        fontWeight: "bold",

    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
});
