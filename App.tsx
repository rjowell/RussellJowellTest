/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const test = "test";



//Props for Grid Buttons
type ButtonProps = {
  onOrOff: string;
  name: string;
  room_location: string;
}

//Props for WX component
type WeatherProps = {
  cityName: string;
  temperature: string;
  rainChance: string;
  cloudConditions: string;

}

//Blueprint for Grid buttons
const GridBox = (props: ButtonProps) => {
  return(<View style={styles.item}>
    <Text>{props.onOrOff}</Text>
    <Text>{props.name}</Text>
    <Text>{props.room_location}</Text>
  </View>)
}

const WeatherBox = (props:WeatherProps) => {

}

//Data for Switch Grid Buttons
const switchData = [
{onOrOff:"On",name:"Switch 1.1",room_location:"Living Room"},
{onOrOff:"On",name:"Switch 1.2",room_location:"Dining Room"},
{onOrOff:"Off",name:"Switch 1.3",room_location:"Front Door"},
{onOrOff:"Off",name:"Switch 1.4",room_location:"Master Bathroom"},
{onOrOff:"On",name:"Switch 1.5",room_location:"Bedroom 1"},
{onOrOff:"On",name:"Switch 1.6",room_location:"Bedroom 2"},
{onOrOff:"On",name:"Switch 1.7",room_location:"Master Bedroom"},
{onOrOff:"On",name:"Switch 1.8",room_location:"Garage"}]

function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={styles.app}>
      <Text>City Name</Text>
      <Text>100C</Text>
      <Text></Text>
      {switchData.map((item)=>{return <GridBox name={item.name} onOrOff={item.onOrOff} room_location={item.room_location}/>})}
      <GridBox onOrOff='On' name='Switch 1' room_location='living room'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flex:1,
    minWidth:100,
    maxWidth:100,
    height:100,
    backgroundColor:'rgba(50,50,50,0.1)',
    
  },
  app: {
    flexDirection:"row",
    flexWrap:"wrap"
  }
});

export default App;
