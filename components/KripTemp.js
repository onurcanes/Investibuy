import { Text, View , StyleSheet, Image} from "react-native"

const KripTemp = (props) => {
    return (
        <View style={styles.main}>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1, flexDirection:'row', padding:1}}>
        <Image source={require('../assets/krpt.png')} style={{width:40, height:40, marginLeft:10, marginTop:10}} />
        <Text style={{fontSize:15, marginLeft:10, marginTop: 23, fontWeight:'bold'}}>{props.kriptoshot.name} ({props.kriptoshot.code})</Text>
        </View>
        <View style={{flex:1, alignItems:'flex-end', padding:10}}>
        <Text style={{fontSize:18, color : 'green', fontWeight:'bold'}}>Alış - {props.kriptoshot.pricestr} {props.kriptoshot.currency}</Text>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        width:'100%',
        height:60,
        borderRadius:10,
        backgroundColor:'#f2efef',
        flexDirection:'row',
        marginTop:10
    }
})

export default KripTemp;