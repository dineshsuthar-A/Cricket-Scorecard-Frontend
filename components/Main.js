import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';
import { useFocusEffect } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const Api = require("./Api/Api");

export default function Main({ navigation }) {
    const [name, setname] = useState("");
    const [team1, setteam1] = useState("");
    const [team2, setteam2] = useState("");
    const [date, setdate] = useState("");
    const [stadium, setstadium] = useState("");
    const [status, setstatus] = useState();
    const [statusCode, setStatusCode] = useState(1);
    const [search, setsearch] = useState();
    const [ID1, setId] = useState();

    const getUser = () => {
        Api.user().then((response) => {
            setname(response.data.name);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getUserMatches = () => {
        Api.userMatchLive().then((response) => {
            setId(response.data.id);
            setteam1(response.data.team1);
            setteam2(response.data.team2);
            setdate(response.data.date);
            setstadium(response.data.stadium);
            setstatus(response.data.status);
            setStatusCode(1);
        }).catch((error) => {
            setStatusCode(error.response.status);
        });
    }


    const deleteUserMatches = () => {
        Api.deleteuserMatchLive().then((response) => {
            ToastAndroid.show("Match Cancelled.", ToastAndroid.SHORT);
            setStatusCode(0);
        }).catch((error) => {
            console.log(error.response.status);
        });
    }

    const serchid = () => {
        setsearch("");
        navigation.navigate('Search', {
            id: search
        });
    }
    const [all, setall] = useState();
    const getAll = () => {
        Api.allmatch().then((response) => {
            setall(response.data.result);
        })
    }
    useFocusEffect(React.useCallback(() => {
        getUser();
        getUserMatches();
        getAll();
    }, [statusCode]));
    return (
        <View style={{ flex: 1 }} >

            <ImageBackground source={require('../assets/gradientback.png')} resizeMode="stretch" style={{ width: "100%", height: "100%" }} >
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput keyboardType="number-pad" placeholder='Search...' onChangeText={(t) => setsearch(t)} style={{ flex: 0.9, padding: 3.7, paddingLeft: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, backgroundColor: "white" }} />
                    <TouchableOpacity style={{ flex: 0.2, alignItems: "center", backgroundColor: "orange", fontWeight: "bold", borderBottomRightRadius: 20, borderTopRightRadius: 20, paddingTop: 8, paddingBottom: 8 }} onPress={() => serchid()}><Text >Search</Text></TouchableOpacity>
                </View>
                <Text style={MainStyle.welcomeText}>Hi, {name}</Text>
                <View style={(statusCode == 1) ? MainStyle.currentMatchBox : MainStyle.displayNone}>
                    <View style={{ display: "flex", flexDirection: "row", marginLeft: -20, backgroundColor: "orange", paddingTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginRight: -20 }}><Text style={{ fontSize: 14, fontWeight: "bold", flex: 1, textAlign: "left", marginLeft: 20, marginBottom: 4 }}>Your Match</Text>
                        <Text style={{ flex: 1, textAlign: "right", marginRight: 20 }}>ID : {ID1}</Text></View>
                    <Text style={MainStyle.teamText}>{team1}</Text>
                    <Text style={{ fontSize: 16, marginLeft: 4 }}>vs</Text>
                    <Text style={MainStyle.team2Text}>{team2}</Text>
                    <Text style={{ color: "#666", marginTop: 10 }}>{date}  at  {stadium}</Text>
                    <View style={status ? MainStyle.displayNone : MainStyle.startButton}>
                        <TouchableOpacity style={MainStyle.buttonStyle} >
                            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }} onPress={deleteUserMatches}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.buttonStyleStart} onPress={() => navigation.navigate('Toss')}>
                            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Start</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={status ? MainStyle.resumeButton : MainStyle.displayNone}>
                        <TouchableOpacity style={MainStyle.buttonStyleStart} >
                            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Resume</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={MainStyle.allMatchBox}>
                    <View style={{ marginLeft: -20, backgroundColor: "orange", paddingTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}><Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 20, marginBottom: 4 }}>All Matches</Text></View>
                    <ScrollView>
                        {
                            all
                                ?
                                all.map((i, ind) =>
                                    <TouchableOpacity key={ind} style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
                                        <Text style={{ color: "grey", textAlign: "right", marginRight: 10 }}>ID : {i.id}</Text>
                                        <Text style={MainStyle.teamText}>{i.team1} </Text>
                                        <Text style={{ fontSize: 16, marginLeft: 3 }}>vs</Text>
                                        <Text style={MainStyle.team2Text}>{i.team2}</Text>
                                        <Text style={{ color: "#666", marginTop: 10, marginBottom: 10 }}>Match on {i.date} at {i.stadium}</Text>
                                    </TouchableOpacity>
                                )
                                :
                                null
                        }
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

const MainStyle = StyleSheet.create({
    displayNone: {
        display: "none",
    },
    resumeButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    startButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    welcomeText: {
        padding: 20,
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    }, buttonStyleStart: {
        width: 100,
        backgroundColor: 'orange',
        textAlign: 'center',
        color: 'white',
        margin: 10,
        padding: 8,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
        borderRadius: 20
    },
    buttonStyle: {
        width: 100,
        backgroundColor: '#ff3e3f',
        textAlign: 'center',
        color: 'white',
        margin: 10,
        padding: 8,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
        borderRadius: 20
    },
    teamText: {
        marginTop: 2,
        fontWeight: "bold",
        fontSize: 20
    },
    team2Text: {
        fontWeight: "bold",
        fontSize: 20
    },
    currentMatchBox: {
        backgroundColor: "#f4e1c1",
        width: "90%",
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    allMatchBox: {
        backgroundColor: "#f4e1c1",
        width: "90%",
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 30
    }
}
)