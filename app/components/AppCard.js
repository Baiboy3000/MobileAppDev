import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AppCard({category, title, subtitle, image, navigation, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(onPress)} > 
            {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri: image}} style={styles.image}/>}
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.subtitle}> {subtitle} </AppText>  
            <AppText style={styles.subtitle}> {category} </AppText> 
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColorLite,
        borderRadius:20,
        overflow:"hidden",
        marginBottom: 25,
    }, 
    image:{
        height: 200,
        width: "100%",
    },
    title:{
        fontWeight:"bold",
    },
    subtitle:{
        fontSize:16,
    }
})

export default AppCard;