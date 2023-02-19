import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function Match() {
  return (
    <View style={{ height: '100%' }} >
      <Text style={style.id}>Match ID : 60</Text>
      <View style={style.score}>
        <Text style={style.scoretxt}>MI  0/0  (0.0)</Text>
      </View>
      <View style={style.batsman}>
        <View style={{ flex: 0.5, }}>
          <Text style={{ fontWeight: "bold", backgroundColor: "orange", paddingLeft: 10, paddingTop: 2, paddingBottom: 2 }}>Batsman</Text>
          <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>Decock</Text>
            <Text style={{ paddingTop: 10, fontSize: 16 }}>Rohit Sharma</Text>
          </View>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ display: "flex", flexDirection: "row", backgroundColor: "orange", paddingTop: 2, paddingBottom: 2 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>R</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>B</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>4</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>6</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
          </View>
        </View>
      </View>
      <View style={style.bowler}>
        <View style={{ flex: 0.5, }}>
          <Text style={{ fontWeight: "bold", backgroundColor: "orange", paddingLeft: 10, paddingTop: 2, paddingBottom: 2 }}>Bowler</Text>
          <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>Jadeja</Text>
          </View>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={{ display: "flex", flexDirection: "row", backgroundColor: "orange", paddingTop: 2, paddingBottom: 2 }}>
            <Text style={{ fontWeight: "bold", flex: 1 }}>O</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>W</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>R</Text>
            <Text style={{ fontWeight: "bold", flex: 1 }}>Eco</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", paddingTop: 10, }}>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
            <Text style={{ flex: 1 }}>0</Text>
          </View>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: "row" }}>
        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>1</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>2</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>3</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>4</Text></TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: "row" }}>
        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>5</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>6</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>W</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>NB</Text></TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: "row" }}>
        <TouchableOpacity style={{ backgroundColor: "#ff3e3f", flex: 1, padding: 20, alignItems: "center", margin: 20, borderRadius: 20 }}><Text>Wicket</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={{
        position: "absolute",
        bottom: 0,
        width: '100%',
        alignItems: "center",
        backgroundColor: "#ff3e3f",
        padding: 15
      }}><Text style={{ fontWeight: "bold", fontSize: 18 }}>Finish</Text></TouchableOpacity>
    </View >
  )
}

const style = StyleSheet.create({
  id: {
    backgroundColor: "orange",
    paddingTop: 5,
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 5

  },
  score: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "lightblue"
  },
  scoretxt: {
    fontSize: 22,
    fontWeight: "bold"
  },
  batsman: {
    display: "flex",
    flexDirection: "row",
  },
  bowler: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "black",
    paddingBottom: 20,
    borderBottomWidth: 1

  },
  control: {

  }

})