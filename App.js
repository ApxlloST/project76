import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{
        headerShown:false
      }}>

        <Stack.Screen name = "Home" component ={HomeScreen}/>
        <Stack.Screen name = "IssLocation" component ={IssLocationScreen}/>
        <Stack.Screen name = "Meteors" component ={MeteorScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;
