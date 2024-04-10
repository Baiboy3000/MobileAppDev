import React from 'react';
import {View, StyleSheet, Image, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

const blurRadiusValue = Platform.OS === 'android'? 0.7 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>             
                <View style={styles.welcomeContainer}>
                    <Image 
                    style={styles.logo}
                    source={require("../assets/LogoNew.png")}
                    />
                    <MaterialCommunityIcons
                        size={60}
                        color={AppColors.primaryColor}/>
                    <AppText></AppText>
                </View>

                <View style={styles.buttonsContainer}>
                    <AppButton title="Login" onPress={ () => navigation.navigate("Login")}/>
                    <AppButton title="Register" onPress={ () => navigation.navigate("Register")}/>
                </View>

                

        </AppScreen>    

    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FDFFFC',
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }, 
    buttonsContainer:{
        marginTop: 100,
        marginEnd:10,
        flexDirection:'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf:'center',
        width: '50%'
        
    },
    logo: {
        marginTop:50,
        height: 200,
        width: '70%'
    }

})
export default WelcomeScreen;