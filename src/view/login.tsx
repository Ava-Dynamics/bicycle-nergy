import React from 'react';
import {Image, SafeAreaView,Text, TextInput, View, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

// const Styles = StyleSheet.create({
//     tela:{backgroundColor:'#70A9A1',width:'100%',height:'100%'},
//     divLogo:{width:'100%',display:'flex',alignItems:'center',marginTop:'40%'},
//     logo:{width:'80%'},
//     divInputs:{width:'100%',display:'flex',marginTop:'30%'},
//     inputs:{marginHorizontal:30,padding:5,borderColor:'black',borderWidth:1,margin:5,borderRadius:5},
//     buttons:{textAlign:'center',fontSize:25,fontWeight:'bold'},
//     buttonsRegister:{textAlign:'center',fontSize:25,fontWeight:'bold',borderColor:'black',borderWidth:1,marginHorizontal:50}
// })

export default function Login({navigation}) {

    function realizarLogin(){
        navigation.replace('default')
    }

    return (
        <SafeAreaView >
            <View className='w-screen h-screen bg-lime-100 flex justify-center align-middle p-3'>
                <View className='mt-8 mb-10'>
                    <Image source={require('../../assets/logo.png')} resizeMode="contain" />
                </View>
                <View className='flex my-9'>
                    <TextInput className='border-b-2 border-black rounded-md p-1 m-2' placeholder="CPF ou Nº de telefone"/>
                    <TextInput className='border-b-2 border-black rounded-md p-1 m-2' placeholder="Senha"/>
                    <View className='flex items-center mt-10'>
                        <Pressable onPress={realizarLogin}>
                            <Text className=' text-4xl font-bold m-2'>Entrar</Text>
                        </Pressable>
                        <Pressable onPress={realizarLogin}>
                            <Text className=' text-2xl font-bold m-2'>Primeiro acesso</Text>
                        </Pressable>
                    </View>
                </View>
                <View className='flex items-center bottom-0'>
                        <Text className='mb-5'>Ou autentique utilizando:</Text>
                        <AntDesign name="google" size={50} color="black" onPress={realizarLogin}/>
                </View>
            </View>
        </SafeAreaView>
    )
}