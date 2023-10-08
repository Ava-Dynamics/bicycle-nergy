import { View, Image, KeyboardAvoidingView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Button, Divider, Stack, TextInput } from "@react-native-material/core";
import { useRouter } from 'expo-router'
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

export default function LoginPage(){
    const navigation = useRouter();
    const { register, setValue, handleSubmit } = useForm();
    
    const onSubmit = async data => {
        axios.post('http://10.0.2.2:3001/auth/login',data).then((response) => {
            let login = response.data;
            if(login['actived']){
                navigation.push('/home');
            }
        }).catch(()=>{});
    };
    
    useEffect(()=>{
        register('username');
        register('password');
    },[register]);
    
    return (
        <KeyboardAvoidingView className=" flex-1 items-center justify-center content-center bg-green-100">
            <View className='z-10 mt-8 mb-24 w-80 flex items-center justify-center content-center'>
                <Image source={require("../../src/images/logo.png")}/>
            </View>
            <View className=" z-10 w-full">
                <Stack spacing={30} style={{ margin: 30 }}>
                    <TextInput placeholder="Usuario" variant="standard" color='black' onChangeText={text => setValue('username', text)}/>
                    <TextInput secureTextEntry={true} placeholder="Senha" variant="standard" color='black' onChangeText={text => setValue('password', text)}/>
                    <Divider style={{marginVertical:20}} leadingInset={16}/>
                    <Button title={"Entrar"} color="black" variant="contained" onPress={handleSubmit(onSubmit)}/>
                    <Divider style={{marginVertical:10}} leadingInset={10}/> 
                    <View className="flex justify-center items-center">
                        <FontAwesome name="instagram" size={50} color="black" />
                    </View>
                </Stack>
            </View>
            <View className="absolute bg-lime-900/20 top-3 right-4 w-1/2 h-1/2 rounded-full z-0"/>
        </KeyboardAvoidingView>
    )
}