import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import KripTemp from "../../components/KripTemp";
import { themeColors } from "../../colors";

const Kripto = () => {
    const url_side = 'https://api.collectapi.com/economy/cripto?auth';
    const [kripto , setKripto] = useState([]);
    useEffect(() => {
         const GetData = async () => {
            try {
                const response = await axios({
                    method : 'get',
                    url : `${url_side}`,
                    headers : {
                        Authorization : 'apikey 4LmNN5E1m915l2gr2K4hoJ:7rsOiOnEJB00zkID0ehRYI',
                        "Content-Type" : 'application/json',
                    }
                })
                const dataforkripto = response.data.result;
                setKripto(dataforkripto);
            
            } catch (error) {
                console.log(error);
            }
         }
         GetData();
    }, [])
    return(
        <View style={{flex:1, backgroundColor:themeColors.backside}}>
             <View style={{marginTop:50}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:'#ECECEC', marginLeft:13}}>Kripto</Text>
      </View>
            <FlatList showsVerticalScrollIndicator={false} data={kripto} renderItem={({item}) => <KripTemp kriptoshot={item} />} />
        </View>
    )
}

export default Kripto;