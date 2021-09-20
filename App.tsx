import React from 'react';
import { Text, View } from 'react-native';
import { Square } from 'react-native-shape';

const YourApp = () => {
  return (
    // <View style={{flex: 1, flexDirection: "column", justifyContent: "space-evenly"}}>
    //   <View style={{flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
    //     <Square color="red"/>
    //     <Square color="red"/>
    //     <Square color="red"/>
    //   </View>
    //   <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
    //     <Square color="blue"/>
    //     <Square color="blue"/>
    //     <Square color="blue"/>
    //   </View>
    //   <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
    //     <Square color="green"/>
    //     <Square color="green"/>
    //     <Square color="green"/>
    //   </View>
    // </View>
    <SquareGrid rows={3} cols={3}/>
  );
}

const SquareGrid = (props) => {
  var gridViews : any[] = []

  for (let i = 0; i < props.rows; i++) {
    var squares : any[] = []
    for (let j = 0; j < props.cols; j++) {
      squares.push(<Square color="blue" key= {'${i}, ${j}'} />)
    }
    gridViews.push(
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
        {squares}
      </View>
    )
  }

  var grid = (
      <View style={{flex: 1, flexDirection: "column", justifyContent: "space-evenly"}}>
        {gridViews}
      </View>
  )

  return grid
}

export default YourApp;
