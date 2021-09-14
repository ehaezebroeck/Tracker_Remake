import React from 'react';
import { Text, View } from 'react-native';
import { Square } from 'react-native-shape';

const YourApp = () => {
  return (
    <View style={{flex: 1, flexDirection: "column", justifyContent: "space-evenly"}}>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
        <Square color="red"/>
        <Square color="red"/>
        <Square color="red"/>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
      <Square color="blue"/>
        <Square color="blue"/>
        <Square color="blue"/>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
      <Square color="green"/>
        <Square color="green"/>
        <Square color="green"/>
      </View>
    </View>
  );
}

// const SquareGrid = (rows, cols) => {
//   for ()
// }

export default YourApp;
