import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTeam1 } from './CreateTeam1';
import { CreateTeam2 } from './CreateTeam2';

const Api = require("./Api/Api");
const stack = createNativeStackNavigator();
export default function CreateMatch({ navigation }) {
    const [team1, setteam1] = useState("");
    const [team2, setteam2] = useState("");
    const [overs, setovers] = useState();
    const [Stadium, setstadium] = useState("");
    const [date, setdate] = useState("");
    const createApi = async () => {
        Api.createMatch(team1, team2, Stadium, date, overs).then(async (response) => {
            await setteam1("");
            await setteam2("");
            await setovers("");
            await setstadium("");
            await setdate("");
            navigation.push('CreateTeam1');
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
    return (
        <View style={CreateStyle.container}>
            <TextInput placeholder="Team 1 Name" value={team1} onChangeText={t => setteam1(t)} style={CreateStyle.textInputStyle} />
            <TextInput placeholder="Team 2 Name" value={team2} onChangeText={t => setteam2(t)} style={CreateStyle.textInputStyle} />
            <TextInput placeholder="Number of Overs" value={overs} onChangeText={t => setovers(t)} keyboardType='number-pad' style={CreateStyle.textInputStyle} />
            <TextInput placeholder="Date" value={date} onChangeText={t => setdate(t)} style={CreateStyle.textInputStyle} />
            <TextInput placeholder="Stadium" value={Stadium} onChangeText={t => setstadium(t)} style={CreateStyle.textInputStyle} />
            <TouchableOpacity style={CreateStyle.buttonStyle} onPress={createApi}>
                <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }} onPress={createApi}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const CreateStyle = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: '100%',
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column"
    },
    textInputStyle: {
        width: '80%',
        marginTop: 20,
        padding: 4,
        alignSelf: 'center',
        backgroundColor: "#fff",
        paddingLeft: 20,
        borderWidth: 0.5,
        borderRadius: 20,
    }, buttonStyle: {
        width: '80%',
        backgroundColor: '#ff3e3f',
        textAlign: 'center',
        color: 'white',
        padding: 8,
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 60,
        fontFamily: 'sans-serif',
        borderRadius: 20
    }
})