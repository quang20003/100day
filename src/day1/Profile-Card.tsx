import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Profile() {
    const [follow,setFollow] = useState('Follow')
    const hlFollow = () => {
        setFollow('un Follow')
        if(follow === 'un Follow') {
            setFollow('Follow')
        }
    }
    return (
        <View style={style.container}>
            <View>
                <Image style={style.image} source={require('../../asset/img/huhu.jpg')}/>
            </View>
            <View style={style.text}>
                <Text style={style.name}>Johnny Rogers</Text>
                <Text style={style.email}>Rogers@gmail.com</Text>
            </View>
            <View style={style.totalIcon}>
            <Ionicons name="logo-facebook" size={24} color="black" />
            <Ionicons name="logo-linkedin" size={24} color="black" />
            <Ionicons name="restaurant-outline" size={24} color="black" />
            <Ionicons name="logo-instagram" size={24} color="black" />
            <Ionicons name="tennisball-outline" size={24} color="black" />
            </View>
            <View style={style.contentext}>
                <Text style={style.colortext}>We help CEOs, CFOs, and other key leaders 
                    of growing companies leverage IT in the best
                     way possible. The result? Businesses that run 
                     better, with fewer headaches, and happier, more
                      productive teams.</Text>
            </View>
            <View style={style.button}>
                <TouchableOpacity onPress={hlFollow}>
                    <Text style={style.clickbutton0}>{follow}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.clickbutton}>Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const style = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        backgroundColor: '#5E6572',
        height: 600,
        margin:30,
        borderRadius: 25,
        elevation: 30,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: 'center',
        margin: 30,
    },
    text: {
        alignSelf: 'center',
    },
    name: {
        fontSize: 20,
        color: '#000',
    },
    email: {
        fontSize: 10,
        color: '#000',
    },
    totalIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
    contentext: {
      marginHorizontal: 25,
      marginTop: 30,
    },
    colortext : {
        color: '#000',
    },
    button : {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    clickbutton0: {
        borderWidth: 1,
        width: 130,
        marginTop:50,
        padding:8,
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius: 15,
        backgroundColor: '#E42318',
        borderColor: '#E42318',
    },
    clickbutton: {
        borderWidth: 1,
        width: 130,
        marginTop:50,
        padding:8,
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        borderColor: '#E42318',
        color: '#000',
    }
})