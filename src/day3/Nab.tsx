import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home";
import Dasboard from "./Dasboard";
import Email from "./Email";
import Settings from "./Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import Person from "./Person";
import CreateAcc from "../day4/CreateAcc";
import SignUPGoogle from "../day5/SignupGoogle";
import SignUp from "../day5/SignUp";
export default function Nab() {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    function MyTab () {
        return (
            <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName : any;
                    if (route.name === "Home") {
                        iconName = focused ? 'home': 'home-outline';
                    }else if (route.name ==="Das") {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if(route.name ==="Email") {
                        iconName = focused ? 'mail': 'mail-outline';
                    }else if(route.name === "Settings") {
                        iconName = focused ? "settings": 'settings-outline';
                    }
                    return <Ionicons name = {iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
            >
                <Tab.Screen name="Home" component={Home} 
                />
                <Tab.Screen name="Das" component={Dasboard} />
                <Tab.Screen name="Email" component={Email} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name = "account" component={CreateAcc}/>
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen name="person" component={Person}/>
                <Stack.Screen name="SignUPGoogle" component={SignUPGoogle}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}