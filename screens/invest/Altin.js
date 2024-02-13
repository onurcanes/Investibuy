import { FlatList, Text, View } from "react-native"
import { themeColors } from "../../colors";
import { useEffect, useState } from "react";
import axios from "axios";
import Golds from "../../components/Golds";

const Altin = () => {
    const url_side = 'https://api.collectapi.com/economy/goldPrice';
    const [gold , setGold] = useState([]);
    useEffect (() => {
        const GetData = async () => {
           try {
            const response = await axios({
                method : 'get',
                url : `${url_side}`,
                headers : {
                    Authorization : 'apikey 4LmNN5E1m915l2gr2K4hoJ:7rsOiOnEJB00zkID0ehRYI',
                    "Content-Type" : 'application/json', 
                }
            });
            const dataforgold = response.data.result;
            setGold(dataforgold);
           } catch (error) {
              console.log(error);
           }
        }
        GetData();
    },[])
    return(
        <View style={{flex:1, backgroundColor:themeColors.backside}}>
             <View style={{marginTop:50}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC', marginLeft:13}}>Altın</Text>
      </View>
            <FlatList  showsVerticalScrollIndicator={false} data={gold} renderItem={({item}) => <Golds goldenshot={item} />} />
        </View>
    )
}

export default Altin;