/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
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
    <View style={styles.gridBoxTop}>
    <Image style={{height:30,width:30}} source={require('./lightbulb.png')}/>
    <Text>{props.onOrOff}</Text>
    </View>
    <View>
    <Text>{props.name}</Text>
    <Text>{props.room_location}</Text>
    </View>
  </View>)
}
//Blueprint for top Weather Data
const WeatherBox = (props: WeatherProps) => {
  return(
  <View>
    <Text>{props.cityName}</Text>
    <Text>{props.temperature}</Text>
    <Image style={{height:30,width:30}} source={require('./raindrop.png')}/>
    <Text>{props.rainChance}</Text>
    <Text>{props.cloudConditions}</Text>
  </View>)

}

//Blueprint

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
    
    <SafeAreaView style={{}}>
      <WeatherBox cloudConditions='Partly' cityName='Houston' temperature='50' rainChance='45%'/>
      <View style={styles.switchGrid}>
      
      {switchData.map((item)=>{return <GridBox name={item.name} onOrOff={item.onOrOff} room_location={item.room_location}/>})}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flex:1,
    padding:5,
    margin:5,
    minWidth:100,
    maxWidth:100,
    height:100,
    backgroundColor:'rgba(50,50,50,0.1)',
    flexDirection:'column',
    justifyContent:'space-between'
    
  },
  switchGrid: {
    flexDirection:"row",
    flexWrap:"wrap"
  },
  gridBoxTop:
  {
    flexDirection:"row",
    justifyContent:'space-between'
  }
});

export default App;
