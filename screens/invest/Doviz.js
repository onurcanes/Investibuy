import { FlatList, Text, View } from "react-native"
import { themeColors } from "../../colors";
import { useEffect, useState } from "react";
import axios from "axios";
import DovTepm from "../../components/DovTemp";

const Doviz = () => {
    const url_side = 'https://api.collectapi.com/economy/allCurrency';
    const [currency, setCurrency] = useState([]);
    useEffect(() => {
       const GetData = async () => {
          try {
            const response = await axios({
                method:'get',
                url : `${url_side}`,
                headers : {
                    Authorization : 'apikey 4LmNN5E1m915l2gr2K4hoJ:7rsOiOnEJB00zkID0ehRYI',
                    "Content-Type" : 'application/json',
                }
              });
            const datafordoviz = response.data.result;
            setCurrency(datafordoviz);
          } catch (error) {
            console.log(error); 
          }
       }
       GetData();
    } , [])
    return(
        <View style={{backgroundColor:themeColors.backside, flex:1}}>
           <View style={{marginTop:50}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC', marginLeft:13}}>Döviz</Text>
      </View>
            <FlatList showsVerticalScrollIndicator={false} data={currency} renderItem={({item}) => <DovTepm doviz={item} />} />
        </View>
    )
}

export default Doviz;