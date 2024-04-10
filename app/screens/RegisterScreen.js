import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';



function RegisterScreen({props, navigation}) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="account-circle" 
                        size={80}
                        color={AppColors.primaryColor}/>
                </View>
                <View style={styles.textInputContainer}>  
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Full Name"
                        textContentType="emailAddress"
                        onChangeText = { userInputName => setUserName(userInputName)}
                        />           
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                </View> 
                <AppButton 
                title="Register" 
                onPress={() => {
                    console.log(userName, email,password)
                    navigation.navigate("Login", {
                        user: userName,
                        pass: password,
                        userEmail: email,
                    });
                   
                  }}  />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:AppColors.otherColor,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }, 
    textInputContainer:{
        marginVertical:50,

    }

})

export default RegisterScreen;