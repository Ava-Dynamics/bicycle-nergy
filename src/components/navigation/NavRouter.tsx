import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../../view/home'
import Profile from '../../view/profile'
import Login from '../../view/login'

import { MaterialIcons } from '@expo/vector-icons'; 


export function NavDrawer(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Inicio' component={NavRouter}></Drawer.Screen>
            <Drawer.Group>
                <Drawer.Screen name='login' component={Login} options={{headerShown:false}}/>
            </Drawer.Group>
        </Drawer.Navigator>
    );
}

export function NavRouter() {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:'green'}}> 
            <Tab.Screen name="inicio" component={Home} options={{headerShown:false,tabBarIcon:({ color, size }) => (<MaterialIcons name="electric-bike" size={size} color={color} />),}}/>
            <Tab.Screen name="historico" component={Home} options={{headerShown:false,tabBarIcon:({ color, size }) => (<MaterialIcons name="history-edu" size={size} color={color} />),}}/>
            <Tab.Screen name="Perfil" component={Profile} options={{headerShown:false,tabBarIcon:({ color, size })=>(<MaterialIcons name="person" size={size} color={color} />)}}/>
        </Tab.Navigator>
    );
}

export default function NavStack() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="default" component={NavDrawer} options={{headerShown:false}}/>
                <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}