import React, { useState } from 'react';

import AppColors from '../config/AppColors';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';


const categories = [
    {label: "Adventure", value:1, icon:"airplane-takeoff", backgroundColor:"red"},
    {label: "Thriller", value:2, icon:"ghost", backgroundColor:"blue"},
    {label: "Fiction", value:3,icon:"flash", backgroundColor:"green"},
];


function NewCollectionScreen(props) {
    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle]=useState("");
    const[category, setCategory] = useState("");


    return (
        <AppScreen style={{backgroundColor:AppColors.otherColor}}>
            <AppTextInput
                icon=""
                placeholder="Collection Name"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
                />

            <AppTextInput
                icon="calendar-month"
                placeholder="Date"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
                />

            <AppPicker 
                selectedItem={category}
                onSelectItem = {item => setCategory(item)}
                data={categories} 
                icon="apps" 
                placeholder="Charity Category" 
                numColumns={3}/>

            <AppButton title="Confirm Collection" onPress={() => console.log(title, subTitle, category.label)}/>
        </AppScreen>
    );
}

export default NewCollectionScreen;