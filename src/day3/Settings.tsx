import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Settings({navigation}: any){
    return (
        <View>
            <View style={style.contentHeader}>
                <View>
                    <Image style={style.image} source={require('../../asset/img/huhu.jpg')}/>
                </View>
                <View>
                    <Text style={style.texttitle}>Lisa Richardson</Text>
                    <Text style={style.texttitle1}>Environmental meteorologist</Text>
                </View>
            </View>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="people-sharp" size={24} color="black" />
                    <Text style={style.textper}>Personal Data</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="chatbox" size={24} color="black" />
                    <Text style={style.textper}>Messages</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="notifications" size={24} color="black" />
                    <Text style={style.textper}>Notifications</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="location-sharp" size={24} color="black" />
                    <Text style={style.textper}>Location</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="people-circle-sharp" size={24} color="black" />
                    <Text style={style.textper}>Community</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <View style={style.boderw}>
            </View>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="people-sharp" size={24} color="black" />
                    <Text style={style.textper}>FAQs</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.contentper} onPress={()=> navigation.navigate('person')}>
                <View style={style.bodyper}>
                    <Ionicons name="settings" size={24} color="black" />
                    <Text style={style.textper}>Settings</Text>
                </View>
                <View>
                <Ionicons name="chevron-forward-sharp" size={22} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const style = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
    },
    texttitle: {
        color:'#000',
        marginLeft:10,
        fontWeight:'700',
    },
    texttitle1: {
        color:'#000',
        marginLeft:10,
        fontWeight:'400',
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:12,
        marginTop:30,
        borderBottomWidth:1,
        padding:15,
    },
    textper: {
        color:'#000',
        fontWeight:'700',
        marginLeft: 10,
    },
    contentper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:12,
        marginTop:30,
    },
    bodyper: {
        flexDirection: 'row',
        alignItems:'center',
    },
    boderw: {
        borderBottomWidth:1,
        marginHorizontal:12,
        marginTop:30,
    }
})