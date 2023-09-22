import { forwardRef, useEffect, useMemo, useState, useImperativeHandle } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { View } from "react-native";


const MapVW = forwardRef((props,ref)=>{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region,setRegion] = useState(null);
    const MarkerPoints = [{x:-22.8232, y:-47.2782,t:'Bicicleta Aro 29 Caloi Velox MY23'},{x:-22.8284, y:-47.2698,t:'BICICLETA GTS ARO 29'}];

    async function getAuth(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        } else {
            await Location.watchPositionAsync({accuracy: Location.Accuracy.Highest, timeInterval: 1000},setLocal);
        }
    }

    async function setLocal(local: any){
        setLocation(local);
    }

    useEffect(()=>{
        getAuth()
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
        center: ()=>{setRegion(false)}
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
                    key={index}     
                    title={markerPoints.t}
                    coordinate={{
                        latitude:markerPoints.x,
                        longitude: markerPoints.y,
                    }}
                    image={require('../../images/bikeMark.png')}
                />
            )})
        }
        </MapView>
    )
})

export default MapVW;