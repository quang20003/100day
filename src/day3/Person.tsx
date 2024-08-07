import { Text, TouchableOpacity, View } from "react-native";

export default function Person({navigation}: any){
    return (
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{color:'#000', alignContent:'center',alignSelf:'center', fontWeight:'800', fontSize:20, marginTop:20,}} > well come to TO TO TÚ TU</Text>
        </TouchableOpacity>
    )
}