import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import MyCollectionsScreen from '../screens/MyCollectionsScreen';
import HomeScreen from '../screens/HomeScreen';
import CharitiesScreen from '../screens/CharitiesScreen';
import MoreInfoScreen from '../screens/MoreInfoScreen';

const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Collections" component={MyCollectionsScreen}/>
        <AppStack.Screen name="Charities" component={CharitiesScreen}/>
        <AppStack.Screen name="MoreInfo" component={MoreInfoScreen}/>
    </AppStack.Navigator>
)

export default AuthNavigator; 