import { Tabs } from "expo-router";
import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons  } from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs 
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor:'black',
                    margin:10,
                    borderRadius:10
                },
                tabBarActiveTintColor:'#72ff75'}}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarStyle:{
                        backgroundColor:'black',
                        margin:10,
                        borderRadius:10,
                        position: 'absolute',
                    },
                    title: 'Inicio',
                    tabBarIcon:()=><MaterialCommunityIcons name="google-maps" size={30} color="white" />
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title:'perfil',
                    tabBarIcon:()=><MaterialIcons name="pedal-bike" size={30} color="white" />
                }}
            />

            <Tabs.Screen
                name='historic'
                options={{
                    title:'historico',
                    tabBarIcon:()=><Entypo name="list" size={30} color="white" />
                }}
            />

        </Tabs>
    )
}