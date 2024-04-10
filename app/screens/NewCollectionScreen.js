import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';



const categories = [
    {label: "Environmental ", value:1, icon:"pine-tree-fire", backgroundColor:"red"},
    {label: "Children Rescue", value:2, icon:"account-child", backgroundColor:"blue"},
    {label: "Human Rights", value:3,icon:"human-greeting-variant", backgroundColor:"green"},
    {label: "Disaster Relief", value:3,icon:"hospital-box", backgroundColor:"orange"},
    {label: "Research", value:3,icon:"microscope", backgroundColor:"purple"},
    {label: "Animal Conservation", value:3,icon:"koala", backgroundColor:"gray"},
];


function NewCollectionScreen({navigation}) {
    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle]=useState("");
    const[category, setCategory] = useState("");
    const[image, setImage] = useState(null);

    const[titleError, setTitleError]=useState("");
    const[subTitleError, setSubTitleError]=useState("");
    const[categoryError, setCategoryError]=useState("");
    const[imageError, setImageError]=useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({path: pickerResult.uri});
        console.log(pickerResult);
    }

    const doErrorCheck = () => {
        setTitleError( title.length>0 ? "": "Please set a valid Book Title");
        setSubTitleError(subTitle.length>0 ? "": "Please set a valid subtitle");
        setCategoryError(category? "": "Please pick a category from the list" );
        setImageError(image? "": "Please pick an image");
        return ((title.length>0) && (subTitle.length>0) && (category) && (image)? true: false)
    }

    const addBook = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const books = commonData.getBooks(user);
        const bookID = books.length+1;
        const newBook = {
            title: title,
            subtitle: subTitle,
            category: category.label,
            bookid: bookID,
            userid: user,
            image: image.path,
        };

        console.log(newBook);
        commonData.addBook(newBook);

    }

    
    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppTextInput
                icon="book-open-page-variant"
                placeholder="Collection Name"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
                />
            
            {titleError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{titleError}</AppText>: <></>}

            <AppTextInput
                icon="calendar-month"
                placeholder="Date"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
                />
            
            {subTitleError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{subTitleError}</AppText>: <></>}

            <AppPicker 
                selectedItem={category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps" 
                placeholder="Charity Category" 
                numColumns={3}/>
            
            {categoryError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{categoryError}</AppText>: <></>}


            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                 <AppIcon name="camera" size={80} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor}/>
                 {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
            </TouchableOpacity>

            {imageError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{imageError}</AppText>: <></>}


            <AppButton title="Confirm Collection" onPress={() => { 
                        if(doErrorCheck()){
                           addBook();
                           navigation.navigate("MyCollections");
                        }
                     }}/>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    }
})

export default NewCollectionScreen;