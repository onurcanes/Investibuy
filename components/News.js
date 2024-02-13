import { StyleSheet, View , Text, Image} from "react-native"

const News = (props) => {
    return(
        <View style={styles.main}>
            <Image source={{uri : props.newsdata.image}} style={{ height:200}} />
            <Text style={{fontSize:20, fontWeight:'bold', marginTop:7}}>{props.newsdata.name}</Text>
            <Text style={{fontSize:15, color:'gray', marginTop:10}}>{props.newsdata.description}</Text>
            <Text style={{fontSize:15, fontStyle :'italic'}}>{props.newsdata.source}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        width:'93%',
        height: 450,
        backgroundColor:'#f2efef',
        borderRadius:8,
        marginTop:10,
        padding:15,
        marginLeft:13,
        elevation : 10
    }
})

export default News;