import { Pressable, View } from "react-native";
import MapsVW from "../../src/components/Maps";
import { SearchBar } from "@rneui/base";
import { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import AvatarIcon from "../../src/components/AvatarIcon";



export default function HomePage({navigation}){
  const [search, setSearch] = useState("");
  const MVW = useRef(0);

  function center(){
    if(MVW.current['center']){
      try {
        MVW.current['center']()
      } catch (error) {
        
      }
    }
  }

  return (
    <View>
      <MapsVW ref={MVW} />
      <View className="absolute top-3 w-full h-auto z-10 flex flex-row justify-around items-center">
        <View className="w-4/5">
          <SearchBar
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0, 
              shadowColor: 'transparent',
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent'
            }}
            style={{color: 'white'}}
            inputContainerStyle={{backgroundColor:'black'}}
            
            round={true}
            showCancel={true}
            placeholder="Endereço"
            placeholderTextColor="white"
            value={search}
            onChangeText={text=>{setSearch(text)}}
          />
        </View>
        <View className="w-auto">
          <Pressable>
            <Link href={{pathname:"/profile/"}}>
              <AvatarIcon/>
            </Link>
          </Pressable>
        </View>
      </View>

      <View className="absolute bottom-20 w-full h-auto z-10 flex flex-row justify-end items-center">
        <Ionicons style={{backgroundColor:'black',borderRadius:10,padding:5,margin:10}} name="locate" size={35} color="white" onPress={center} />
      </View>
    </View>
  );
}