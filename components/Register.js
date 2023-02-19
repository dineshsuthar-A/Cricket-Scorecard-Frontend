import { SafeAreaView, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastAndroid } from 'react-native';


export function Register({ navigation }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");


  const RegisterApi = () => {
    console.log(name, mobile, password);
    axios.post("/register", {
      name,
      mobile,
      password

    }).then(response = (result) => {
      ToastAndroid.show("Registered", ToastAndroid.SHORT);
      navigation.navigate("Login");
    }).catch(error = (err) => {
      ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
      console.log(err);
    });
  }

  return (
    <SafeAreaView style={registerstyle.container} >
      <ImageBackground source={require("../assets/background.png")} resizeMode="stretch" style={registerstyle.image}>
        <Text style={registerstyle.textLogin}>Register</Text>
        <TextInput placeholder="Your name" onChangeText={t => setName(t)} style={registerstyle.textInputStyle} />
        <TextInput placeholder="Mobile Number" maxLength={10} onChangeText={t => setMobile(t)} keyboardType="number-pad" style={registerstyle.textInputStyle} />
        <TextInput placeholder="Password" style={registerstyle.textInputStyle} onChangeText={t => setpassword(t)} secureTextEntry={true} />
        <TouchableOpacity style={registerstyle.buttonStyle} onPress={RegisterApi}>
          <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const registerstyle = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
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
  textLogin: {
    position: "relative",
    top: -40,
    color: "#fff",
    fontFamily: 'sans-serif',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 100,
  },
  buttonStyle: {
    width: "80%",
    backgroundColor: '#ff3e3f',
    textAlign: 'center',
    color: 'white',
    margin: 10,
    padding: 8,
    fontWeight: "bold",
    fontFamily: 'sans-serif',
    borderRadius: 20
  },
});