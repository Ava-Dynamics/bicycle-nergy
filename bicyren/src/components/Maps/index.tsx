import { forwardRef, useEffect, useMemo, useState, useImperativeHandle } from "react";
import MapView from "react-native-maps";
import * as Location from 'expo-location';

const MapVW = forwardRef((props,ref)=>{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region,setRegion] = useState(null);

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
            {/* <Marker coordinate={region}></Marker> */}
        </MapView>
    )
})

export default MapVW;