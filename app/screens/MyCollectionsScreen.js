import React, { useState } from 'react';
import { FlatList, StyleSheet, View, ScrollView, Text, RefreshControl } from 'react-native';

import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';

// Function to get the list of collections
const getBooks = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getBooks(user);
}

function MyCollectionsScreen({ navigation }) {
  const bookList = getBooks();
  console.log(bookList);

// State variables
  const [color, changeColor] = useState('red');
  const [refreshing, setRefreshing] = useState(false);

// Callback function for the refresh action
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <AppScreen style={styles.container}>
      
      <AppText children="Swipe down to refresh screen" style={styles.refreshtext} />
      <FlatList
        data={bookList}
        keyExtractor={book => book.bookid.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
            onSwipeLeft={() => {
              <View style={styles.deleteView} />;
            }}
            onPress={() => {
              navigation.navigate("Charities", {
                screen: "Charities",
                params: {
                  paramTitle: item.title,
                },
              });
            }}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
    marginTop: 0,
  },
  deleteView: {
    // Define your delete view styles here
  },
  refreshtext: {
    marginTop: 50,
  },
});

export default MyCollectionsScreen;