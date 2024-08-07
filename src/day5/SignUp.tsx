import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function SignUp({navigation}:any) {
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [easy,setEasy] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.titleheader}>Sign Up</Text>
            <Text style={styles.text}>Join us now Sign up to kick-start your journey</Text>
            <View style={styles.bodyInput}>
                
                    <TextInput
                    style={[
                        styles.textinput,
                        focusedInput === 'name' && { borderColor: 'blue', borderWidth: 1.5 }
                    ]}
                    placeholder="Name"
                    placeholderTextColor={"#000"}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    />
                
                
                    <TextInput
                    style={[
                        styles.textinput,
                        focusedInput ==="email" && {borderColor:'blue', borderWidth:1.5}
                    ]}
                    placeholder="Email"
                    placeholderTextColor={"#000"}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={()=>setFocusedInput(null)}
                    />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <TextInput
                        style={[
                            styles.textinput,
                            focusedInput === "password" && {borderColor:"blue", borderWidth: 1.5}
                        ]}
                        placeholder="Password"
                        placeholderTextColor={"#000"}
                        onFocus={()=> setFocusedInput('password')}
                        onBlur={()=> setFocusedInput(null)}
                        secureTextEntry = {!easy}
                        />
                        <TouchableOpacity onPress={()=>setEasy(!easy)}>
                        <Ionicons 
                        style={styles.iconpass}
                                name={easy ?"eye-outline" : "eye-off-outline"} 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonInput} onPress={()=>navigation.navigate('MyTab')}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center', marginTop:10}}>
                    <Text style={{color:'#000'}}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{color:'#1050A9'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleor}>
                    <View style={styles.line} />
                        <Text style={styles.textor}>or</Text>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity style={styles.signupGoogle} onPress={()=> navigation.navigate('SignUPGoogle')}>
                    <Ionicons name="logo-google" size={20} color="#1050A9" />
                    <Text style={{color:'#000',fontWeight:'700', marginLeft:5}}>Sign up with Google</Text>
                </TouchableOpacity>
            </View>
    )
}
export const styles = StyleSheet.create({
    titleheader: {
        color: '#000',
        fontWeight:'700',
        textAlign:'center',
        fontSize: 20,
    },
    text: {
        color: '#000',
        textAlign:'center',
        fontSize:12,
        marginTop:20,
    },
    container: {
        marginTop: 20,
        marginHorizontal:12,
        backgroundColor:'#D5D8DF',
        flex: 1,
        borderRadius: 10,
        paddingTop:20,
        elevation:12,
    },
    textinput: {
        color:'#000',
        borderWidth:0.5,
        borderColor: 'gray',
        borderRadius:5,
        padding:10,
        margin:10,
        height:50,
        width: 320,
    },
    bodyInput: {
        marginTop: 30,
        marginHorizontal:12,
    },
    iconpass: {
        position:'absolute',
        right:20,
        top:-10
    },
    buttonInput: {
        backgroundColor:'#19245A',
        marginHorizontal:12,
        padding:10,
        alignItems:'center',
        borderRadius:10,
        marginTop:20,

    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
      },
      textor: {
        marginHorizontal: 10,
        color:'#000'
      },
      titleor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:12,
      },
      signupGoogle: {
        backgroundColor:'#FFFFFF',
        marginHorizontal:12,
        padding:10,
        borderRadius:10,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'gray',
      }
})