import { StyleSheet, Text, View, Image } from "react-native"

const DovTepm = (props) => {
    return(
        <View style={styles.main}>
            <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'row'}}>
        <Image source={require('../assets/curr2.png')} style={{width:40, height:40, marginLeft:10, marginTop:10}} />
        <Text style={{fontSize:15, marginLeft:10, marginTop: 23, fontWeight:'bold'}}>{props.doviz.name}</Text>
        </View>
        <View style={{flex:1, alignItems:'flex-end',padding:5}}>
        <Text style={{fontSize:17, color : 'green', fontWeight:'bold'}}>Alış - {props.doviz.buying}</Text>
        <Text style={{fontSize:17, color : 'red', fontWeight:'bold'}}>Satış - {props.doviz.selling}</Text>
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
export default DovTepm;