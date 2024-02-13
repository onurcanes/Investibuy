import {DrawerContentScrollView, DrawerItem, createDrawerNavigator} from "@react-navigation/drawer";
import Altin from './screens/invest/Altin';
import Doviz from './screens/invest/Doviz';
import Kripto from './screens/invest/Kripto';
import { FontAwesome , MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, View } from "react-native";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator drawerContent={(props) => <LeftSide {...props} />}>
            <Drawer.Screen name="Altın" component={Altin} options={{
                drawerIcon : () => <MaterialCommunityIcons name="gold" size={20} color="black" />,
                header : () => false,
            }}></Drawer.Screen>
            <Drawer.Screen name="Kripto" component={Kripto} options={{
                drawerIcon : () => <FontAwesome5 name="bitcoin" size={18} color="black" />,
                header : () => false,
            }}></Drawer.Screen>
            <Drawer.Screen name="Döviz" component={Doviz} options={{
                drawerIcon : () => <Foundation name="dollar" size={34} color="black" />,
                header : () => false,
            }}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export const LeftSide = (props) => {
       return(
        <View style={{flex:1 , backgroundColor:'yellow'}}>
            <View style={{flex:1, backgroundColor:'#ECECEC'}}>
                <Image source={require('./assets/steve.jpeg')} style={{width:80, height:80, borderRadius:50, marginLeft:10, marginTop:60}} />
                <View style={{marginLeft:120, marginTop:-60}}>
                <Text style={{fontSize:23, fontWeight:'bold'}}>Steve JOBS</Text>
                <Text style={{color : 'gray'}}>steve@apple.com</Text>
                </View>
            </View>
            <View style={{flex:4, backgroundColor:'#312f30'}}>
             <DrawerContentScrollView style={{marginTop:-40}}>
                <View>
                <DrawerItem label="Döviz" inactiveTintColor="#ECECEC" icon={() => <FontAwesome name="dollar" size={28} color="#ECECEC" />}  style={{marginLeft:13}} onPress={() => props.navigation.navigate('Döviz')}/>
                <DrawerItem label="Kripto" inactiveTintColor="#ECECEC" icon={() => <FontAwesome name="btc" size={28} color="#ECECEC" />} onPress={() => props.navigation.navigate('Kripto')} />
                <DrawerItem label="Altın"  style={{marginLeft:4,marginTop:8}}inactiveTintColor="#ECECEC" icon={() => <MaterialCommunityIcons style={{marginTop:-7, marginLeft:2}} name="gold" size={28} color="#ECECEC" />} onPress={() => props.navigation.navigate('Altın')} />
                </View>
             </DrawerContentScrollView>
            </View>
        </View>
       )
}

export default DrawerNavigator;