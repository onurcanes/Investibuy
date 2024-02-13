import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UserSign} from "./screens/UserSign";
import {UserSignUp} from "./screens/UserSignUp";
import { OtherNavigator } from "./OtherNavigator";
const Stack = createNativeStackNavigator();
export const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sign" component={UserSign} options={{
                header :() => false,
            }}></Stack.Screen>
            <Stack.Screen name="Signup" component={UserSignUp} options={{
                header : () => false
            }}></Stack.Screen>
            <Stack.Screen name="Enterside" component={OtherNavigator} options={{
                header : () => false,
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}