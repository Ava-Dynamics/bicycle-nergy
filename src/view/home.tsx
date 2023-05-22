import React from 'react';
import { SafeAreaView,Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import MapsBN from '../components/Maps';

export default function Home() {
    return (
        <SafeAreaView>
            <View className='bg-lime-100 w-screen h-screen'>
               <View className='w-full h-1/5 align-middle justify-center'>
                    <View className='flex flex-row items-center px-10'>
                        <Ionicons name="person" size={35} color="black"/>
                        <Text className='text-2xl'>Olá Thaisa!</Text>
                    </View>
                    <View className='m-4 flex flex-row border border-black rounded-md'>
                        <Ionicons name="search" size={24} color="black" />
                        <TextInput className='' placeholder='Para onde deseja ir?'/>
                    </View>
               </View>
               <MapsBN/>
            </View>
        </SafeAreaView>
    );
}