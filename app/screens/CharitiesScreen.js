import React, {useState} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';


const initialAuthorList = [
    {
        id:1,
        name:"Australian Red Cross",
        image: require("../assets/AustralianRedCross.png"),
    },
    {
        id:2,
        name:"WIRES Australian Wildlife ",
        image: require("../assets/wireswildlife.png"),
    },
    {
        id:3,
        name:"Beyond Blue",
        image: require("../assets/beyondblue.jpg"),
    },
    {
        id:4,
        name:"Food Bank",
        image: require("../assets/FoodBank_Logo.png"),
    },

]


//Charity (Author) screen which provides a list of charities available to add to your colleciton
function MyAuthorsScreen(props) {

    const[refreshing, setRefreshing] = useState(false);
    const[authors, setAuthors] =  useState(initialAuthorList);

    const handleDelete = (author) => {
        const newAuthorList =  authors.filter (item => item.id !== author.id);
        setAuthors(newAuthorList);
    }

    return (
        <AppScreen style={styles.container}>
            <FlatList
            data = {authors}
            keyExtractor = { author => author.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setAuthors(initialAuthorList)}
            renderItem = {({item}) => 
                <AppListItem 
                    title={item.name}
                    image={item.image}
                    onPress={() => console.log(item)}
                    /*onSwipeLeft={ () => (
                    <View style={styles.deleteView}>
                        <TouchableOpacity onPress={() => handleDelete(item)}>
                            <AppIcon name="trash-can" iconColor={AppColors.otherColor} backgroundColor={AppColors.black}/> 
                        </TouchableOpacity>
                    </View>
                    )}*/
    
                />}
            ItemSeparatorComponent = { () =>
                <View style={styles.seperator}/>
            }
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MyAuthorsScreen;