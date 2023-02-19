import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const api = require("./Api/Api");
export default function SelectBowler({ navigation }) {
  const [bowl, setbowl] = useState();
  const getBowlers = () => {
    console.log('e');
    api.getBow().then((response) => {
      console.log(response);
      setbowl(response.data.players);
    }).catch((error) => {
      console.log(error);
    });
  }
  const select = (i) => {
    navigation.navigate('match');
  }

  useFocusEffect(
    React.useCallback(() => {
      getBowlers();
    }, []));

  return (
    <ScrollView>
      <View style={SbowlerStyle.containerStyle}>{
        bowl ?
          bowl.map((i, ind) =>
            <TouchableOpacity onPress={() => select(i)} key={ind} style={SbowlerStyle.OpacityStyle} ><Text style={SbowlerStyle.TextStyle}>{i.name}</Text></TouchableOpacity>
          )
          :
          null
      }
      </View>

    </ScrollView>
  )
}

const SbowlerStyle = StyleSheet.create({
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff"
  },
  OpacityStyle: {
    backgroundColor: "pink",
    width: '80%',
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20
  },
  TextStyle: {
    fontWeight: "bold"
  }
});