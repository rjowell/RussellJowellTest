/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const lightbulbImageString = './lightbulb.png';
const raindropString = './whiteRaindrop.png';
const cloudImageString = './cloud.png';

//Data for Switch Grid Buttons
const switchData = [
  {onOrOff:"On",name:"Switch 1.1",room_location:"Living Room"},
  {onOrOff:"On",name:"Switch 1.2",room_location:"Dining Room"},
  {onOrOff:"Off",name:"Switch 1.3",room_location:"Front Door"},
  {onOrOff:"Off",name:"Switch 1.4",room_location:"Master Bathroom"},
  {onOrOff:"On",name:"Switch 1.5",room_location:"Bedroom 1"},
  {onOrOff:"On",name:"Switch 1.6",room_location:"Bedroom 2"},
  {onOrOff:"On",name:"Switch 1.7",room_location:"Master Bedroom"},
  {onOrOff:"On",name:"Switch 1.8",room_location:"Garage"}];



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
    <View style={styles.separatorBar}>
      <Text style={styles.separatorBarText}>{props.title}</Text>
      <Text style={styles.separatorBarText}>+</Text>
    </View>
  )
}

//Component for Switch Grid buttons
const GridBox = (props: ButtonProps) => {
  return(<View style={styles.gridBox}>
    <View style={styles.gridBoxTop}>
    <Image style={{height:30,width:30}} source={require(lightbulbImageString)}/>
    <Text style={{color:'white'}}>{props.onOrOff}</Text>
    </View>
    <View>
    <Text style={{color:'white',fontWeight:'bold'}}>{props.name}</Text>
    <Text style={{fontStyle:'italic',color:'white'}}>{props.room_location}</Text>
    </View>
  </View>)
}
//Component for top Weather Data
const WeatherBox = (props: WeatherProps) => {
  return(
  <View style={styles.weatherBox}>
    <View>
    <Text style={{fontWeight:'bold',fontSize:25,color:'white'}}>{props.cityName}</Text>
    <Text style={{fontSize:50,color:'white'}}>{props.temperature}</Text>
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <Image style={{height:18,width:12,marginRight:5}} source={require(raindropString)}/>
    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{props.rainChance}</Text>
    </View>
    </View>
    <View style={{flexDirection:'column',alignItems:'center'}}>
      <Image style={{height:35,width:55,marginBottom:10}} source={require(cloudImageString)}/>
    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>{props.cloudConditions}</Text>
    </View>
  </View>)

}

//Blueprint



function App(): React.JSX.Element {
  

  return (
    
    <SafeAreaView style={styles.app}>
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
  weatherBox:{
    width:'75%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
    marginTop:17},
  app:{
    backgroundColor:'#303787',
    width:'100%',
    height:'100%',
    alignItems:'center',
    alignSelf:'center',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  gridBox: {
    flex:1,
    padding:5,
    margin:5,
    minWidth:100,
    borderRadius:4,
    maxWidth:100,
    height:100,
    backgroundColor:'rgba(150,150,150,0.5)',
    flexDirection:'column',
    justifyContent:'space-between'
    
  },
  separatorBarText:{
    fontWeight:'bold',
    fontSize:17,
    color:'white'
  },
  separatorBar:{
    marginTop:8,
    marginBottom:8,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'rgba(150,150,150,0.2)',
    
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
