import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

const api = require("./Api/Api");
export default function YourMatches() {
    const [data, setData] = useState();
    const getMymatch = () => {
        api.mymatch().then((response) => {
            setData(response.data.result)
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useFocusEffect(
        React.useCallback(() => {
            getMymatch();
        }, []));
    return (
        <ScrollView>
            {data ?
                data.map((i, ind) =>
                    <TouchableOpacity key={ind} style={{ margin: 10, padding: 10, backgroundColor: "#fff", borderRadius: 10 }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ color: "grey", fontSize: 12, flex: 2, textAlign: "left" }}>{i.team1} vs {i.team2} at {i.stadium}</Text>
                            <Text style={{ color: "grey", fontSize: 12, flex: 1, textAlign: "right" }}>ID : {i.id}</Text>
                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>{i.team1} </Text>
                        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 4 }}>{i.team2}</Text>
                        <Text style={{ marginTop: 5, color: 'grey', fontSize: 12 }}>Match Date : {i.date}</Text>
                    </TouchableOpacity>
                ) : null}
        </ScrollView>
    )
}