import { Text, View , StyleSheet, Image} from "react-native"

const WeatherTemp = (props) => {
    return(
        <View style={styles.main}>
            <View>
                <Image source={{uri : props.weathershot.icon}} style={{width:65, height:65, marginLeft:15}} />
            </View>
            <View>
                <Text style={{fontSize:17, fontWeight:'bold', marginLeft:10, marginTop:30}}>{props.weathershot.day}</Text>
                <View>
                    <Text style={{color : 'gray',marginLeft:10}}>{props.weathershot.description}</Text>
                </View>
                <View>
                    <Text style={{marginLeft:175, marginTop:-40,  fontSize:30}}>{props.weathershot.degree} C°</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main : {
        width:'100%',
        height:90,
        borderRadius:10,
        backgroundColor:'#f2efef',
        flexDirection:'row',
        marginTop:10
    }
})

export default WeatherTemp;