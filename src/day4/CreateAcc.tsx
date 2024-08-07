import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CreateAcc ({navigation}: any) {
    const [Password,setPasseword] = useState('heloqueng');
    const [onof,setOnof] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>START FOR FREE</Text>
            <Text style={styles.textAccount}>Create new account</Text>
            <View style={styles.bodyInput}>
                <View style={styles.textinput}>
                    <Text style={{color: 'grey', fontSize:12,paddingLeft:3}}>First name</Text>
                    <TextInput
                     style={{color:'#000'}}
                    placeholderTextColor={"#000"}
                    placeholder="John"
                    />
                </View>
                <View style={styles.textinput}>
                    <Text style={{color: 'grey', fontSize:12,paddingLeft:3}}>Last name</Text>
                    <TextInput
                    style={{color:'#000'}}
                    placeholderTextColor={"#000"}
                    placeholder="John"
                    />
                </View>
            </View>
            <View style={styles.bodyemail}>
                <Text style={{color: 'grey', fontSize:12, paddingLeft:3}}>Email</Text>
                <TextInput
                style={{color:'#000'}}
                placeholderTextColor={"#000"}
                placeholder="Johndue@gmail.com"
                />
            </View>
            <View style={styles.bodypass}>
                <Text style={{color:'#184FC6'}}>Password</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between',}}>
                    <TextInput
                         style={{color:'#000'}}
                         onChangeText={ text => {setPasseword(text)}}
                         value={Password}
                         secureTextEntry={!onof}
                    />
                    <TouchableOpacity onPress={() => setOnof(!onof)}>
                        <Ionicons 
                            name={onof ?"eye-outline" : "eye-off-outline"} 
                            size={24} 
                            color="black" 
                        />
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:5}}>
                <Text style={{color:'#000'}}>Already have an account?</Text>
                <TouchableOpacity> 
                    <Text style={{color:'#184FC6', fontWeight:'600'}}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonAccount} onPress={()=> navigation.navigate('MyTab')}>
                <Text style={{textAlign:'center', color: '#FFFFFF'}}>Create account</Text>
            </TouchableOpacity>
            <View>
                <Text style={{color:'#000', textAlign:'center'}}>Sign up with Google</Text>
            </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    title: {
        color:'gray',
        fontWeight: '600',
    },
    textAccount: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    container: {
        marginHorizontal: 18,
        marginTop:50,
    },
    textinput: {
        backgroundColor:'#AEC3C6',
        height:55,
        width:170,
        borderRadius:5, 
    },
    bodyInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,  
    },
    bodyemail: {
        backgroundColor:'#AEC3C6',
        height: 55,
        marginTop:10,
        borderRadius:5,
    },
    bodypass: {
        borderWidth:1,
        height:62,
        marginTop:10,
        padding:5,
        borderRadius:10,
         borderColor:"#184FC6"
        
    },
    buttonAccount: {
        backgroundColor: '#184FC6',
        padding: 10,
        borderRadius: 25,
        marginTop:20,
    }
})