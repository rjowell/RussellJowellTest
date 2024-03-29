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

type SeparatorBarName = {
  title:string;
}

//Component for separator bar
const SeparatorBar = (props:SeparatorBarName) => {
  return(
    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.separatorBar}>{props.title}</Text>
      <Text style={styles.separatorBar}>+</Text>
    </View>
  )
}

//Component for Switch Grid buttons
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
//Component for top Weather Data
const WeatherBox = (props: WeatherProps) => {
  return(
  <View style={{width:'75%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20,marginTop:20}}>
    <View>
    <Text style={{fontWeight:'bold',fontSize:25}}>{props.cityName}</Text>
    <Text style={{fontSize:50}}>{props.temperature}</Text>
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <Image style={{height:18,width:12,marginRight:5}} source={require('./raindrop_black.png')}/>
    <Text style={{fontSize:20}}>{props.rainChance}</Text>
    </View>
    </View>
    <View style={{flexDirection:'column',alignItems:'center'}}>
      <Image style={{height:35,width:55}} source={require('./cloud.png')}/>
    <Text style={{fontSize:20,fontWeight:'bold'}}>{props.cloudConditions}</Text>
    </View>
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
    
    <SafeAreaView style={{alignItems:'center',alignSelf:'center',flexDirection:'column',justifyContent:'space-between'}}>
      <WeatherBox cloudConditions='Partly Cloudy' cityName='Houston' temperature='50°F' rainChance='45%'/>
      <SeparatorBar title='Favorite Scenes'/>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <SeparatorBar title='Favorite Devices'/>
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
  separatorBar:{
    fontWeight:'bold',
    fontSize:17
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
