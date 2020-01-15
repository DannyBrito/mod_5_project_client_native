import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native'

import {URL_BASE,headers, random_image} from '../constants/links'
import { TextInput } from 'react-native-gesture-handler'

const ListingShow = (p) =>{

    const[props,setProps] = useState({})

    useEffect(()=>{
        fetch(URL_BASE+`/listings/${p.navigation.state.params.id}`)
            .then(res => res.json())
            .then(res => setProps(res))
    },[])
    // console.log(p.navigation.state.params.id)
    return(
        <View style={styles.container}>
            
            <View style={styles.titleBox}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={{uri: random_image}} />
            </View>
            <View style={styles.content}>
                <Text style={styles.price}>${props.price}</Text>
                <Text style={styles.condition}>condition: {props.condition}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:50,
        // alignItems:'center'
    },
    titleBox:{
        // flex:2,
        height:140,
        justifyContent:'center',
    },
    title:{
        fontSize:50,
        color:'black',
        fontWeight:'normal'
    },
    imageBox:{
        flex:5,
    },
    image:{
        // marginVertical: 5,
        flex:1,
        // width:400,
        // height:400,
        borderRadius:20,
        borderWidth:2.5,
        borderColor:'black'
        
    },
    content:{
        flex:3,
        padding:15,
        // justifyContent:'center'
    },
    price:{
        // flex:1,
        fontSize:35,
        color:'black',
        fontWeight:'bold'
        
    },condition:{
        fontSize:18,
        color:'black',
        // fontWeight:'bold'
    },
    description:{
        paddingTop:10,
        flex:1,
    }
})

export default ListingShow;