import { Avatar } from "@react-native-material/core";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AvatarIcon({size = 45}:any){
    var [imageuri,setImageuri] = useState('');
    useEffect(() => {
        axios.get('http://10.0.2.2:3001/user/files/profile64').then(response => {
            let data = response.data;
            setImageuri('data:' + data.mimetype + ';base64,' + data.buffer);
        })
    },[imageuri])

    if(imageuri){
        return <Avatar label="Thaisa Fujii" size={size} image={{uri:imageuri}}/>;    
    }
    return <Avatar style={{borderRadius:10,backgroundColor:'#72ff75'}} label="Thaisa Fujii" size={size}/>;
}