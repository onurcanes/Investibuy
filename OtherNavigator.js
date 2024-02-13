import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import WeatherJeny from './screens/WeatherJeny';
import { Feather ,MaterialIcons ,MaterialCommunityIcons } from '@expo/vector-icons';
import Anasayfa from "./screens/Anasayfa";
import DrawerNavigator from "./DrawerNavigator";
import { themeColors } from "./colors";
const Tab = createMaterialBottomTabNavigator();
export const OtherNavigator = () => {
    return(
        <Tab.Navigator
          inactiveColor="#312f30"
          activeColor="#312f30"
          barStyle={{
            backgroundColor:themeColors.backside,
            borderRadius:100,
            position:'absolute',
            left:0,
            right:0,
            bottom:40,
            height:40,
          }}
        >
            <Tab.Screen name="Anasayfa" component={Anasayfa}  options={{
                tabBarIcon : () => <Feather name="home" size={24} color="#ECECEC" />,
                tabBarLabel : () => false,
    
            }}></Tab.Screen>
            <Tab.Screen name="Profilejeny" component={WeatherJeny} options={{
                tabBarIcon : () => <MaterialCommunityIcons name="weather-sunny" size={28} color="#ECECEC" style={{marginTop:-2}} />,
                tabBarLabel : () => false,
            }}></Tab.Screen>
            <Tab.Screen name="Investing" component={DrawerNavigator} options={{
                tabBarIcon : () => <MaterialIcons name="attach-money" size={24} color="#ECECEC" />,                tabBarLabel : () => false,
    
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}