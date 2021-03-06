import React, { useState } from 'react'
import {View, Text, StyleSheet,Image,Alert} from 'react-native'
import ListingFlatList from '../components/ListingFlatList'
import { useSelector, useDispatch} from 'react-redux'
import {ButtonGroup,Icon} from 'react-native-elements'
import {ChangeDisplayListing,logOutRestStateAction} from '../redux/actions'

import {random_image} from '../constants/links'
const UserProfile = props =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.first.currentUser)
    const liked = useSelector(state => state.first.liked_listings)
    const own = useSelector(state => state.first.own_listings)

    const [selectedIndex,setSelectedIndex] = useState(0)
    const buttons =['Selling','Favorites']

    const [showLiked, setShowLiked]= useState(false)

    const handlePress = listingProps =>{
        const listing = listingProps
        dispatch(ChangeDisplayListing(listing))
        props.navigation.navigate('ListingShow')
    }
    
    const SignoutPropmt = () =>{
        Alert.alert(
            'Sign Out?',null,
            [{text:'Yes, Logout',
                onPress:()=>signOut()
            },
            {
            text:"Cancel",style:'cancel'
            }
            ]
        )

    }

    const signOut = () =>{
        props.navigation.navigate('Auth')
        dispatch(logOutRestStateAction())
    }

    // console.log(data)
    return(
        <View style={styles.container}>

            <View style={styles.titleBox}>
    <Text style={styles.title}>{user.username[user.username.length-1] === 's'? user.username + '\'':user.username +'\'s'} Profile</Text>
            </View>
                
            <View style={styles.contentBox}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.image} source={{uri:user.image_url}}/>
                    <View style={{height:35,width:35,marginLeft:10,marginTop:165}}>
                        <Icon size={35}type='octicon' onPress={SignoutPropmt}
                        name='sign-out' /> 
                    </View>
                </View>
                <Text style={styles.content}>{user.bio? user.bio :`${user.username} does not have a bio yet`}</Text>
            </View>
            {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
            <View style={styles.spacing}>
            <ButtonGroup
            disabled={[]}
                onPress={setSelectedIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonBox}
            />
            </View>
            <View style={styles.Listing}>
            {selectedIndex === 1 ?<ListingFlatList data={liked} handlePress={handlePress}/>:<ListingFlatList data={own} handlePress={handlePress}/>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },image:{
        height:250,
        width:250,
        marginLeft:50,
        // paddingLeft:100,
        alignSelf:'center',
        borderRadius:20,
        borderColor:'black',
        borderWidth:2,
        marginBottom:20,
    },
    titleBox:{
        height:100,
        // backgroundColor:'black',
        paddingTop:50,
        // alignSelf:'center'

    },
    title:{
        fontSize:30,
        color:'green',
        textAlign:'center'
        
    },
    contentBox:{
        paddingVertical:0,
        paddingHorizontal:30,
        minHeight:275,
        // borderColor:'red',
        // backgroundColor:'red',
        borderBottomColor:'black',
        // borderBottomWidth:0.2  
    },
    content:{
        fontSize:20,
        color:'grey',
        textAlign:'center'
    },spacing:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        backgroundColor:'#dedede'
    },
    buttonBox:{
        height:40,
        width:300,
        // alignSelf:'center',
        // pad
    },
    Listing:{
        borderTopColor:'black',
        borderTopWidth:0.2,
        flex:2,
        // paddingHorizontal:30,
        paddingLeft:35
    }
})

export default UserProfile;