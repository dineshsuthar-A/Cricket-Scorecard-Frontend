import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

const api = require("./Api/Api");

export default function Toss({ navigation }) {
    const [team1, settt] = useState();
    const [team2, setttt] = useState();

    const getTeamData = () => {
        api.getTeam().then((response) => {
            settt(response.data.team1);
            setttt(response.data.team2);
        }).catch((error) => {
            ToastAndroid.show("Error! Try Again", ToastAndroid.SHORT);
        });
    }
    const next = (team) => {
        api.tossWin(team).then((response) => {
            navigation.navigate('SelectBatsman');
        }).catch((error) => {
            ToastAndroid.show("Error! Try Again", ToastAndroid.SHORT);
        })
    }
    useFocusEffect(
        React.useCallback(() => {
            getTeamData();
        }, []));
    return (
        <View>
            <ImageBackground source={require('../assets/gradientback.png')} resizeMode="stretch" style={{ width: "100%", height: "100%" }} >
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 24, textAlign: "center", marginTop: 80, fontFamily: "sans-serif" }}>Who's going to Bat first?</Text>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity style={{ backgroundColor: "#ff3e3f", padding: 10, height: 80, width: 80, borderRadius: 40, margin: 40, display: "flex", justifyContent: "center", alignItems: "center", borderWidth: 1 }} onPress={() => next(team1)}>
                        <Text style={{ fontWeight: "bold" }}> {team1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "orange", padding: 10, height: 80, width: 80, borderRadius: 40, margin: 40, display: "flex", justifyContent: "center", alignItems: "center", borderWidth: 1 }} onPress={() => next(team2)}>
                        <Text style={{ fontWeight: "bold" }}>{team2}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        </View >
    )
}