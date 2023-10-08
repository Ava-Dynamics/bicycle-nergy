import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function TabLayout(){
    axios.delete('http://10.0.2.2:3001/auth/login').then(() =>{console.log('deslogado')}).catch(() =>{})
    return (
        <Tabs 
            screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'rgb(220 252 231)'},tabBarActiveTintColor:'black',tabBarHideOnKeyboard:true}}
        >
            <Tabs.Screen 
                name="login"
                options={{title:'Entrar',tabBarIcon:()=><FontAwesome name="sign-in" size={24} color="black" />}}
            />
            <Tabs.Screen 
                name="signup"
                options={{title:'Criar',tabBarIcon:()=><Ionicons name="create" size={24} color="black" />}}
            />
        </Tabs>
    )
}