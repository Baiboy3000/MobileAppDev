
import React from 'react';
import { StyleSheet, View } from 'react-native';


import HomeScreen from './app/screens/HomeScreen';
import CharitiesScreen from './app/screens/CharitiesScreen';
import MyBooksScreen from './app/screens/MyCollectionsScreen';
import NewBookScreen from './app/screens/NewCollectionScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';

import TestNavigator from './app/navigation/TestNavigator';




export default function App() {
  return (  

    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({

  
})


