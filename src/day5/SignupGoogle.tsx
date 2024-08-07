import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SignUPGoogle() {
    return (
        <View style={styles.container}>
             <Text style={styles.titleheader}>Sign Up</Text>
             <Text style={styles.text}>Join us now Sign up to kick-start your journey</Text>
             <TouchableOpacity style={styles.signupGoogle}>
                <Ionicons name="logo-google" size={20} color="#1050A9" />
                <Text style={{color:'#000',fontWeight:'700', marginLeft:5}}>Sign up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInput}>
                    <Ionicons name="mail" size={20} color="#FFFFFF" />
                    <Text style={{color:'#FFFFFF', marginLeft:5}}>Sign up with Email</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center', marginTop:10}}>
                <Text style={{color:'#000'}}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={{color:'#1050A9'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal:12,
        backgroundColor:'#D5D8DF',
        flex: 1,
        borderRadius: 10,
        paddingTop:20,
        elevation:12,
    },
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
    signupGoogle: {
        backgroundColor:'#FFFFFF',
        marginHorizontal:12,
        padding:10,
        borderRadius:5,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'gray',
      },
      buttonInput: {
        backgroundColor:'#19245A',
        marginHorizontal:12,
        padding:10,
        alignItems:'center',
        borderRadius:5,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',

    },
})