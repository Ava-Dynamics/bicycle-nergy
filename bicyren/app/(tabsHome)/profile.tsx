import { View, Text, Pressable } from "react-native";
import AvatarIcon from "../../src/components/AvatarIcon";
import { useRouter } from "expo-router";

function MenuOptions({text:string,onPressF = false}:any){
    return(
        <Pressable onPress={onPressF}>
            <View className="pl-10 m-5 border-t-2 border-b-2">
                <Text className="py-2">{string}</Text>
            </View>
        </Pressable>
    )
}

export default function ProfilePage(){
    const navigation = useRouter();
    
    return (
        <View>
            <View className="w-full h-auto flex align-middle items-center p-5">
                <AvatarIcon size={75}/>
                <Text className="py-1">Thaísa Fujii</Text>
            </View>
            <View>
                <MenuOptions text={"Meus dados"} />
                <MenuOptions text={"Notificações"}/>
                <MenuOptions text={"Pagamentos"} />
                <MenuOptions text={"Chat Suporte"}/>
                <MenuOptions text={"FAQ"}/>
                <MenuOptions text={"Logout"} onPressF={()=>{
                    navigation.push('/login');
                }}/>
            </View>
        </View>
    )
}