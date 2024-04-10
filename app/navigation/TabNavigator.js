import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import MyCollectionsScreen from '../screens/MyCollectionsScreen';
import NewCollectionScreen from '../screens/NewCollectionScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';


const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColors.otherColor, activeBackgroundColor:AppColors.primaryColor}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="NewCollections" component={NewCollectionScreen} options={{tabBarIcon: () => <AppIcon size={30} name="account-box-multiple-outline" backgroundColor={AppColors.otherColor}/>}}/>
        <AppTab.Screen name="MyCollections" component={MyCollectionsScreen} options={{tabBarIcon: () => <AppIcon size={30} name="account-box-multiple" backgroundColor={AppColors.otherColor}/>}}/>
    </AppTab.Navigator>
)

export default TabNavigator;