import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView,ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'

import Form from '../components/Form'
import CardInsert from '../components/CardInsert'


import {URL_BASE,headers,random_image} from '../constants/links'

const LogIn = props =>{
    const dispatch = useDispatch()
    const userIdTest = useSelector(state => state)

    const handleChange = () =>{
        // props.navigation.navigate('SignUp')
        dispatch({type:"TEST"})
    }
    const handleSubmit =(username,password)=>{
        username = username.trim()
        props.navigation.navigate('Home')
        // fetch(URL_BASE + `login`,{
        //     method:'POST',
        //     headers,
        //     body:JSON.stringify({
        //         user:{
        //             username,
        //             password}
        //     })
        // })
        // .then(res=>res.json())
        // .then(console.log)
    }
    console.log(userIdTest.first.hello)
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
            <ImageBackground source={require('../assets/Login.jpg')} style={{width: '100%', height: '100%'}} style={{...styles.container,...props.style}}>
                
                <View style={styles.MainTitle}>
                    <Text style={styles.MainTextTitle}>Welcome</Text>
                </View>

                <View style={styles.SubTitle}>
                    <Text style={styles.SubTitleText}>Log-In</Text>
                </View>

                <CardInsert style={{flex:6}}>
                    <Form handleChange={handleChange}handleSubmit={handleSubmit} style={{flex:6}}/>
                </CardInsert>

            </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
        // backgroundColor:'#61dafb'
        // padding:16,
        // alignItems:'center',
        // alignContent:'space-between',
        // flexDirection:'row',
        // justifyContent:'space-around',
        // flexWrap:'wrap'
    },
    MainTitle:{
        justifyContent:'center',
        alignItems:'center',
        flex:2,
        // backgroundColor:'green',
    },
    MainTextTitle:{
        fontSize:50,
        color:'white',
        // shadowColor:'black',
        // shadowRadius:6,
        fontWeight:'bold',
        // backgroundColor:'blue',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -4, height: 4},
        textShadowRadius: 10
    },
    SubTitle:{
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'yellow',
        // flex:8,
    },
    SubTitleText:{
        fontSize:50,
        color:'#61dafb',
        fontFamily:'AvenirNext-Italic',
        textAlign:'center',
        backgroundColor:'rgba(0,149,255,0.09)',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 6
        // opacity:0.2,
        // fontWeight:'bold',
    }
})

export default LogIn;