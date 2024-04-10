import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


function MoreInfoScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            <AppText>
                Hello World
            </AppText>
                

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
        marginTop:0,

    },
})

export default MoreInfoScreen;