import { View, Text, Touchable, StyleSheet, TouchableOpacity, ScrollView, TextInput, Picker } from 'react-native'
import React, { useState } from 'react'
import { ToastAndroid } from 'react-native';
const api = require("./Api/Api");
export function CreateTeam2({ navigation }) {
    const [selectedValue1, setSelectedValue1] = useState("Batsman");
    const [selectedValue2, setSelectedValue2] = useState("Batsman");
    const [selectedValue3, setSelectedValue3] = useState("Batsman");
    const [selectedValue4, setSelectedValue4] = useState("Batsman");
    const [selectedValue5, setSelectedValue5] = useState("Batsman");
    const [selectedValue6, setSelectedValue6] = useState("Batsman");
    const [selectedValue7, setSelectedValue7] = useState("Batsman");
    const [selectedValue8, setSelectedValue8] = useState("Batsman");
    const [selectedValue9, setSelectedValue9] = useState("Batsman");
    const [selectedValue10, setSelectedValue10] = useState("Batsman");
    const [selectedValue11, setSelectedValue11] = useState("Batsman");
    const [playername1, setplayername1] = useState("");
    const [playername2, setplayername2] = useState("");
    const [playername3, setplayername3] = useState("");
    const [playername4, setplayername4] = useState("");
    const [playername5, setplayername5] = useState("");
    const [playername6, setplayername6] = useState("");
    const [playername7, setplayername7] = useState("");
    const [playername8, setplayername8] = useState("");
    const [playername9, setplayername9] = useState("");
    const [playername10, setplayername10] = useState("");
    const [playername11, setplayername11] = useState("");
    const next = (wh) => {
        const array = [playername1, playername2, playername3, playername4, playername5, playername6, playername7, playername8, playername9, playername10, playername11];
        const attr = [selectedValue1, selectedValue2, selectedValue3, selectedValue4, selectedValue5, selectedValue6, selectedValue7, selectedValue8, selectedValue9, selectedValue10, selectedValue11];
        const players = [];
        const a = [];
        for (var i = 0; i < 11; i++) {
            if (array[i] != "") {
                players.push(array[i]);
                a.push(attr[i]);
            }
        }
        api.createTeam(2, players, a).then((response) => {
            if (wh == 2) {
                ToastAndroid.show("Saved Successfully!", ToastAndroid.SHORT);
                navigation.push('Toss');
            } else {
                ToastAndroid.show("Saved Team", ToastAndroid.SHORT);
                navigation.navigate("CrickCard");
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#fff",
                borderBottomWidth: 1,
            }}>
                <Text style={Team2Style.playernameHeading}>Player Name</Text>
                <Text style={Team2Style.playerTypeHeading}>Player Type</Text>
            </View>
            <ScrollView style={{ width: "100%", height: "1%" }}>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername1(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue1}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername2(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue2}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername3(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue3}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername4(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue4}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername5(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue5}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername6(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue6}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername7(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue7}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue7(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername8(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue8}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue8(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername9(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue9}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue9(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername10(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue10}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue10(itemValue)} >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={Team2Style.viewHeading}>
                    <TextInput style={Team2Style.playerInput} placeholder='Player Name' onChangeText={t => setplayername11(t)} />
                    <Picker
                        style={Team2Style.playerType}
                        selectedValue={selectedValue11}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue11(itemValue)}
                    >
                        <Picker.Item label="Batsman" value="Batsman" />
                        <Picker.Item label="Bowler" value="Bowler" />
                        <Picker.Item label="All Rounder" value="All Rounder" />
                    </Picker>
                </View>
                <View style={{ height: 130 }}></View>
            </ScrollView>
            <View style={Team2Style.viewStyleBottom} >
                <TouchableOpacity style={Team2Style.buttonStyle} onPress={() => next(2)}>
                    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Start Match</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '80%',
                    backgroundColor: 'orange',
                    textAlign: 'center',
                    color: 'white',
                    padding: 8,
                    fontWeight: "bold",
                    fontFamily: 'sans-serif',
                    borderRadius: 20
                }} onPress={() => next(1)}>
                    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Start later</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Team2Style = StyleSheet.create({
    viewStyleBottom: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",

    },
    playerInput: {
        flex: 0.7,
        borderWidth: 1,
        padding: 1,
        paddingLeft: 15
    },
    playerType: {
        flex: 0.45
    },
    viewHeading: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    playernameHeading: {
        flex: 0.7,
        margin: 15,
        fontWeight: "bold",

    },
    playerTypeHeading: {
        flex: 0.3,
        fontWeight: "bold",
    },

    buttonStyle: {
        width: '80%',
        backgroundColor: '#ff3e3f',
        textAlign: 'center',
        color: 'white',
        padding: 8,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
        borderRadius: 20
    },
});