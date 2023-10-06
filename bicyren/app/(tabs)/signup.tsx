import { useRouter } from "expo-router";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Button, Divider, Stack,Text,TextInput } from "@react-native-material/core";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import axios from 'axios';

export default function SignPage(){
    const navigation = useRouter();
    const { register, setValue, handleSubmit } = useForm();

    const onSubmit = async data => {
        axios.post('http://10.0.2.2:3001/user',data).then((response) => {
            navigation.push('/login');
        });
    };
    
    useEffect(()=>{
        register('name');
        register('username');
        register('password');
        register('email');
    },[register]);

    return (
        <View className=" flex-1 items-center justify-center content-center bg-green-100">
            <View className=" z-10 w-full ">
                <Stack spacing={30} style={{ margin: 30 }}>
                    <TextInput placeholder="Nome" variant="standard" color='black' onChangeText={text => setValue('name', text)}/>
                    <TextInput placeholder="Usuario" variant="standard" color='black' onChangeText={text => setValue('username', text)}/>
                    <TextInput placeholder="Senha" variant="standard" color='black' onChangeText={text => setValue('password', text)}/>
                    <TextInput placeholder="E-mail" variant="standard" color='black' onChangeText={text => setValue('email', text)}/>
                    <Divider style={{marginVertical:20}} leadingInset={16}/>
                    <Button title={"Criar uma nova conta"} variant="contained" color="black" onPress={handleSubmit(onSubmit)}/>
                </Stack> 
                <View className="flex justify-center items-center">
                <Text>Criar com Instagram:</Text>
                    <FontAwesome name="instagram" size={50} color="black" />
                </View>


            </View>
            <View className="absolute bg-white/50 bottom-3 left-4 rotate-45 w-1/2 h-1/2 rounded-3xl z-0"/>
        </View>
    )
}