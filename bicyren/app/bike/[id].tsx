import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-native-material/core";
import { Image } from "@rneui/base";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";

export default function BikeInformation(){
    const { id,image,name } = useLocalSearchParams();
    const navigation = useRouter();
    const [info,setInfo] = useState({});

    function bikeupdate(){
        if(info['user']){
            axios.delete('http://10.0.2.2:3001/bikes/ride',{data: {bikeid:id}})
                .then(response => {
                    navigation.push('/home')
                })
        } else {
            axios.put('http://10.0.2.2:3001/bikes/ride',{data: {bikeid:id}})
                .then(response => {
                    navigation.push('/home')
                })
        }
    }

    useEffect(()=>{
        console.log(id);
        axios.get('http://10.0.2.2:3001/bikes/' + id)
            .then((response)=>{
                let data = response.data;
                data['coordinate'] = JSON.parse(data['coordinate']);
                setInfo(data);
            }).catch(()=>{})
    },[]);

    return (
        <View className="flex flex-col">
            <View className="w-full h-4/5 p-3 flex justify-center items-center">
                <View className="absolute left-5 top-7 z-10">
                    <Pressable onPress={()=>{navigation.push('/home')}}>
                        <Ionicons name="arrow-back-outline" size={30} color="black" />
                    </Pressable>
                </View>

                <View className=" w-full h-80 rounded-md z-0">
                    <Image style={{width:'100%',height:'100%'}} source={{uri:'http://10.0.2.2:3001/bikes/images/' + image}}/>
                </View>
                <Text>{name}</Text>

            </View>
            <View className="w-full h-1/5 flex items-center justify-center">
                <Pressable onPress={bikeupdate} className="w-10/12">
                    <View className="w-full bg-black rounded-md p-5 items-center">
                        {
                            !info['user'] ? <Text color="white">Alugar: R$ 30,00</Text> : <Text color="white">dispersar bike</Text>
                        }
                    </View>
                </Pressable>
            </View>
        </View>
    )
}