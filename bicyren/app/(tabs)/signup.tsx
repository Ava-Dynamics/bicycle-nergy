import { useRouter } from "expo-router";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Button, Divider, Stack,Text,TextInput } from "@react-native-material/core";

export default function SignPage(){
    const navigation = useRouter();

    return (
        <View className=" flex-1 items-center justify-center content-center bg-green-100">
            <View className=" z-10 w-full ">
                <Stack spacing={30} style={{ margin: 30 }}>
                    <TextInput label="Usuario" variant="standard" color='black'/>
                    <TextInput label="Senha" variant="standard" color='black'/>
                    <TextInput label="E-mail" variant="standard" color='black'/>
                    <Divider style={{marginVertical:20}} leadingInset={16}/>
                    <Button title={"Criar uma nova conta"} variant="contained" color="black" onPress={()=>{navigation.push('/home')}}/>
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