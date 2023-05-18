import React from 'react';
import { SafeAreaView,Text, View } from "react-native"

export default function Home() {
    return (
        <SafeAreaView>
            <View className='bg-lime-100 w-screen h-screen'>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
}