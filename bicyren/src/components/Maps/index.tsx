import { forwardRef, useEffect, useMemo, useState, useImperativeHandle } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { router } from "expo-router";
import axios from "axios";


const MapVW = forwardRef((props,ref)=>{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region,setRegion] = useState(null);
    const [MarkerPoints,setMarkerPoints] = useState([]);

    async function getAuth(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        } else {
            await Location.watchPositionAsync({accuracy: Location.Accuracy.Highest, timeInterval: 1000},setLocal);
        }
    }

    async function MarkerPoint() {
        let resp = (await axios.get('http://10.0.2.2:3001/bikes/ride')).data;
        resp.forEach(element => {
            element['coordinate'] = JSON.parse(element['coordinate']);
            return element;
        });
        if(resp.length < 1){
            await new Promise(r => setTimeout(r, 2000));
            MarkerPoint();
        }
        setMarkerPoints(resp);
    }

    async function setLocal(local: any){
        setLocation(local);
    }

    useEffect(()=>{
        getAuth();
        MarkerPoint();
    },[]);

    useMemo(()=>{
        getAuth()
        if(location && errorMsg == null){
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            })
        } else {
            setRegion({
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            })
        }
    },[location]);
    
    useImperativeHandle(ref, () => ({
        center: ()=>{setRegion(false);MarkerPoint()}
    }));

    return (
        <MapView className='w-full h-full'
            region={region}
            showsUserLocation={true}
            showsTraffic={true}
            followsUserLocation={false}
            showsMyLocationButton={false}
        >
        {
            MarkerPoints.map((markerPoints,index)=>{return (
                <Marker
                    key={markerPoints.id}     
                    title={markerPoints.coordinate.name}
                    coordinate={{
                        latitude:markerPoints.coordinate.x,
                        longitude: markerPoints.coordinate.y,
                    }}
                    image={require('../../images/bikeMark.png')}
                    onPress={()=>{
                        router.push({pathname:'/bike/' + markerPoints.id,params:{image:markerPoints.image,name:markerPoints.name}})
                    }}
                />
            )})
        }
        </MapView>
    )
})

export default MapVW;