import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import WeatherTemp from '../components/WeatherTemp'
import axios from 'axios'

export default function WeatherJeny() {
  const url_side = 'https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=istanbul';
  const [weather , setWeather] = useState([]);
  useEffect(() => {
     const GetData = async () => {
         const response = await axios({
             method : 'get',
             url : `${url_side}`,
             headers : {
              Authorization : 'apikey 4LmNN5E1m915l2gr2K4hoJ:7rsOiOnEJB00zkID0ehRYI',
              "Content-Type" : 'application/json',
             }
             
         })
         const dataforweather = response.data.result;
         setWeather(dataforweather);
        }
     GetData();
  }, [])
  return (
    <View style={{flex:1, backgroundColor:'#312f30' }}>
      <View style={{marginTop:50}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC', marginLeft:8}}>Istanbul Haftalık</Text>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC'}}> Hava Durumu</Text>
      </View>
      <FlatList data={weather} renderItem={({item}) => <WeatherTemp weathershot={item} />}/>
      <View style={{width:'100%', height:100}}>

      </View>
    </View>
  )
}