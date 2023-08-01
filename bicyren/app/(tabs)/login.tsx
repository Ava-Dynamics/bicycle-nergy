import { View, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Button, Divider, Stack, TextInput } from "@react-native-material/core";
import { useRouter } from 'expo-router'

export default function LoginPage(){
    const navigation = useRouter();

    return (
        <View className=" flex-1 items-center justify-center content-center bg-green-100">
            <View className='z-10 mt-8 mb-24 w-80 flex items-center justify-center content-center'>
                <Image source={require("../../src/images/logo.png")}/>
            </View>
            <View className=" z-10 w-full">
                <Stack spacing={30} style={{ margin: 30 }}>
                    <TextInput label="Usuario" variant="standard" color='black'/>
                    <TextInput label="Senha" variant="standard" color='black'/>
                    <Divider style={{marginVertical:20}} leadingInset={16}/>
                    <Button title={"Entrar"} color="black" variant="contained" onPress={()=>{navigation.push('/home')}}/>
                    <Divider style={{marginVertical:10}} leadingInset={10}/> 
                    <View className="flex justify-center items-center">
                        <FontAwesome name="instagram" size={50} color="black" />
                    </View>
                </Stack>
            </View>
            <View className="absolute bg-lime-900/20 top-3 right-4 w-1/2 h-1/2 rounded-full z-0"/>
        </View>
    
    )
}