import { View, Text, VirtualizedList, Image } from "react-native";

const BikesImgs = [
    require('../../src/assets/bikes/bikes1.png'),
    require('../../src/assets/bikes/bikes2.png'),
    require('../../src/assets/bikes/bikes3.jpg'),
    require('../../src/assets/bikes/bikes4.png'),
];

const Data = [
    {id:1,address:'Tv. Padre João Augusto Monteiro, 27 - Parada Inglesa',value:'R$20,00',hours:'2H00M',distance:'7.2km',ppm:'-0.9ppm',bikeImg:BikesImgs[0]},
    {id:2,address:'Rua Aquirás, 122 - Vila Granada',value:'R$12,03',hours:'0H28M',distance:'3.7km',ppm:'-0.4ppm',bikeImg:BikesImgs[1]},
    {id:3,address:'Rua Professor Raul Brasil, 192 - Guararema',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[2]},
    {id:4,address:'Rua odeio mobile, 192 - jesuslandia',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[3]},
    {id:5,address:'Tv. Padre João Augusto Monteiro, 27 - Parada Inglesa',value:'R$20,00',hours:'2H00M',distance:'7.2km',ppm:'-0.9ppm',bikeImg:BikesImgs[0]},
    {id:6,address:'Rua Aquirás, 122 - Vila Granada',value:'R$12,03',hours:'0H28M',distance:'3.7km',ppm:'-0.4ppm',bikeImg:BikesImgs[1]},
    {id:7,address:'Rua Professor Raul Brasil, 192 - Guararema',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[2]},
    {id:8,address:'Rua odeio mobile, 192 - jesuslandia',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[3]},
    {id:9,address:'Tv. Padre João Augusto Monteiro, 27 - Parada Inglesa',value:'R$20,00',hours:'2H00M',distance:'7.2km',ppm:'-0.9ppm',bikeImg:BikesImgs[0]},
    {id:10,address:'Rua Aquirás, 122 - Vila Granada',value:'R$12,03',hours:'0H28M',distance:'3.7km',ppm:'-0.4ppm',bikeImg:BikesImgs[1]},
    {id:11,address:'Rua Professor Raul Brasil, 192 - Guararema',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[2]},
    {id:12,address:'Rua odeio mobile, 192 - jesuslandia',value:'R$42,40',hours:'3H53M',distance:'15.2km',ppm:'-1.4ppm',bikeImg:BikesImgs[3]},
];

function Card({data}){
    return (
        <View className="w-full h-20 flex flex-row">
            <View className=" w-1/5 overflow-hidden p-1">
            <Image source={data.bikeImg} className="object-cover  rounded-xl" style={{width:'auto',height:'100%'}}/>
            </View>
            <View className="w-4/5">
                <Text className=" font-bold">{data.address.substring(0, 32)}...</Text>
                <View className="flex flex-row justify-between items-end px-2">
                    <Text>{data.hours}</Text>
                    <Text>{data.distance}</Text>
                    <Text className=" bg-lime-100  rounded-md border">{data.value}</Text>
                </View>
            </View>
        </View>
    )
}


export default function HistoricPage(){
    return (
        <View>
            <VirtualizedList
                data={Data}
                initialNumToRender={5}
                renderItem={(data)=><Card data={data.item}/>}
            keyExtractor={item => item['id']}
            getItemCount={()=>{return Data.length}}
            getItem={(data,index)=>{return data[index]}}
            />
        </View>
    )
}