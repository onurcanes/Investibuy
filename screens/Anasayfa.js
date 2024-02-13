import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import News from '../components/News';
import {auth} from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import FocusAwareStatusBar from '../components/FocusAwareStatus';

const Anasayfa = (props) => {
    const [news , setNews]  = useState([]);    
    const navigation = useNavigation();
    useEffect(() => {


      const urlSide = 'https://api.collectapi.com/news/getNews?country=tr&tag=general';
      const GetData = async () => {
        try {

          const response = await axios({
            method : 'GET',
            url: `${urlSide}`,
            headers:{
              "Content-Type": "application/json",
              "Authorization": "apikey 4LmNN5E1m915l2gr2K4hoJ:7rsOiOnEJB00zkID0ehRYI"
            }
          });

            const gotData = response.data.result;
            setNews(gotData);
          
        } catch (error) {
          console.log(error);
        }
      }
      const user = auth.currentUser;
      if(user) {
        console.log('User Access');
        GetData();
      }
      else {
        console.log('No User');
      }
      
    }, []);

  

  return (
    <View style={{flex:1, backgroundColor: "#312f30",}}>
      <FocusAwareStatusBar barStyle="light-content" />
      <View style={{marginTop:50, flexDirection:'row'}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC', marginLeft:13}}>Haberler</Text>
      <TouchableOpacity onPress={() => {
        try {
          signOut(auth)
          .then(a => {
            console.log('Çıkış yaptı');
            navigation.navigate('Sign');
          })
        } catch (error) {
            console.log(error);
        }
      
      }}>
        <Text style={{fontSize:15, color:'#ECECEC', marginLeft:160, fontWeight:'bold', marginTop:15}}>Sign Out</Text>
      </TouchableOpacity>
      </View>
      <FlatList data={news} keyExtractor={(ind) => ind.key.toString()} renderItem={({item}) => <News newsdata={item} /> } />
    </View>
  )
}

export default Anasayfa;