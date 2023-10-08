import { View,Image } from "react-native";
import { Button, Divider } from "@react-native-material/core";
import { useRouter } from 'expo-router'
import { useEffect } from "react";
import axios from "axios";

export default function Page(){
    const navigation = useRouter();

    async function redirectLogin(){
        try {
            await axios.get('http://10.0.2.2:3001/auth/login').
                then((resp)=>{
                    if(resp.data['id']){
                        navigation.push('/home');
                    }
                })
                .catch(()=>{
                    throw new Error("Falha no login");
                })
        }
        catch (err) {}

    }

    useEffect(()=>{
        redirectLogin();        
    },[]);

    return (
        <View className=" flex-1 items-center justify-center content-center bg-green-100">
            <View className='z-10 mt-8 mb-24 w-80 flex bg-green-600/30 items-center justify-center content-center'>
                <Image source={require("../src/images/logo.png")}/>
            </View>
            <View className=" z-10">
                <Button title={"Tenho conta"} variant="text" color="#264653" onPress={()=>{navigation.push('/login')}}/>
                <Divider style={{marginVertical:20}} leadingInset={16}/>
                <Button title={"Criar uma nova conta"} color="black" onPress={()=>{navigation.push('/signup')}}/>
            </View>
            <View className="absolute bg-white/50 bottom-3 left-4 rotate-45 w-1/2 h-1/2 rounded-3xl z-0"/>
            <View className="absolute bg-lime-900/20 top-3 right-4 w-1/2 h-1/2 rounded-full z-0"/>
        </View>
    )
}