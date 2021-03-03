import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, HomePage,SignUp} from './assets/index';
import { StatusBar } from 'react-native';
import {UserArea} from './View/UserArea';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator
      screenOptions={{
        headerShown: false}}>
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='UserArea' component={UserArea}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
    
    
}
