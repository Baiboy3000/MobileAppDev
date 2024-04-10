import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


function HomeScreen({navigation, route}) {
    return (
        <AppScreen style={styles.container}>
                
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account-circle" 
                        size={80}
                        color={AppColors.primaryColor}/>
                        <AppText>Welcome, Username!</AppText>
                <View style={styles.buttonsContainer}>
                    <AppButton title="Logout" onPress={ () => navigation.navigate("Welcome")}/>
                </View>

                </View>
                <View style={styles.profileContainer}>
                    <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/>
                </View>
                <View style={styles.linksContainer}> 
                    <AppListItem title="My Collections" IconComponent={<AppIcon name="account-box-multiple-outline" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/>} onPress={() => navigation.navigate("MyCollections")}/>
                    <AppListItem title="Charities" IconComponent={<AppIcon name="charity" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/>} onPress={() => navigation.navigate("Charities")}/>
                </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        marginTop:0,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    }, 
    profileContainer:{
        marginTop: 50,
        height: 90,
        backgroundColor:AppColors.otherColorLite,
        justifyContent:"center",
    },
    linksContainer:{
        marginVertical:75,
        backgroundColor:AppColors.otherColorLite,
        height:150,
        justifyContent:"space-around",
        paddingLeft: 10,
    },
    buttonsContainer: {
        marginTop: 20,
    }
})
export default HomeScreen;