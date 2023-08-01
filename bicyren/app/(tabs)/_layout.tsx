import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs 
            screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'rgb(220 252 231)'},tabBarActiveTintColor:'black'}}
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