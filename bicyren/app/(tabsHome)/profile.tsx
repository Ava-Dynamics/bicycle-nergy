import { Avatar } from "@react-native-material/core";
import { View, Text, Pressable } from "react-native";

function MenuOptions({text:string}){
    return(
        <Pressable>
            <View className="pl-10 m-5 border-t-2 border-b-2">
                <Text className="py-2">{string}</Text>
            </View>
        </Pressable>
    )
}

export default function ProfilePage(){
    return (
        <View>
            <View className="w-full h-auto flex align-middle items-center p-5">
                <Avatar style={{borderRadius:10,backgroundColor:'#72ff75'}}  label="Thaisa Fujii" size={70}/>
                <Text className="py-1">Thaísa Fujii</Text>
            </View>
            <View>
                <MenuOptions text={"Meus dados"}/>
                <MenuOptions text={"Notificações"}/>
                <MenuOptions text={"Pagamentos"}/>
                <MenuOptions text={"Chat Suporte"}/>
                <MenuOptions text={"FAQ"}/>
            </View>
        </View>
    )
}