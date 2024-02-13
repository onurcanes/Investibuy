import { StyleSheet, View, Text, Image } from "react-native"

const Golds = (props) => {
    return(
        <View style={styles.main}>
            <View style={{flex:1, flexDirection:'row', width:'100%'}}>
            <View style={{flex:1, flexDirection:'row', width:'50%'}}>
            <Image source={require('../assets/gold.png')} style={{width:40, height:40, marginLeft:10, marginTop:16}} />
            <Text style={{fontSize:17, marginLeft:10, marginTop: 23, fontWeight:'bold'}}>{props.goldenshot.name}</Text>
            </View>
            <View style={{flex:1, width:'50%', marginTop:5, alignItems:'flex-end',padding:5}}>
            <Text style={{fontSize:17, color : 'green', fontWeight:'bold'}}>Alış - {props.goldenshot.buying}</Text>
            <Text style={{fontSize:17, color : 'red', fontWeight:'bold'}}>Satış - {props.goldenshot.selling}</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        borderRadius:10,
        backgroundColor:'#f2efef',
        flexDirection:'row',
        marginTop:10,
        flex:1,
        height:60
    }
})

export default Golds;