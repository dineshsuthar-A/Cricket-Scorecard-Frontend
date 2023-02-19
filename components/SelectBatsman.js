import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

const api = require("./Api/Api");

export default function SelectBatsman({ navigation }) {
  const [bats, setbats] = useState([]);
  const getBatsman = () => {
    api.getBatsmans().then((response) => {
      setbats(response.data.players);
    }).catch((error) => {
      console.log(error);
    });
  }
  const [sel, setselected] = useState();
  const [c, setc] = useState(0);
  const select = (i) => {
    var t;
    if (i == sel) {
      setselected([]);
      t = c - 1;
      setc(t);
      return;
    }
    else {
      t = c + 1;
      if (t == 2) {
        setc(0);
        navigation.navigate("Selectbowler");
      } else {
        setc(t);
        setselected(i);
      }
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      getBatsman();
    }, []));
  return (
    <ScrollView>
      <View style={SbatsmanStyle.containerStyle}>
        {
          bats ?
            bats.map((i, index) =>

              <TouchableOpacity key={index} onPress={() => select(i)} style={(i != sel) ? SbatsmanStyle.OpacityStyle : SbatsmanStyle.SOpacityStyle} ><Text style={SbatsmanStyle.TextStyle}>{i.name}</Text></TouchableOpacity>
            )
            :
            null
        }

      </View>
    </ScrollView >
  )
}

const SbatsmanStyle = StyleSheet.create({
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
  SOpacityStyle: {
    backgroundColor: "grey",
    width: '80%',
    padding: 10,
    color: "white",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20
  },
  TextStyle: {
    fontWeight: "bold"
  }
});