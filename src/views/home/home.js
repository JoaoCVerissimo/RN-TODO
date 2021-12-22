import React, { useState, useLayoutEffect } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
// something@algumacoisa.com
// algumacoisa123!
function HomeScreen({ navigation }) {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  let monthDay = currentDate.getDate();
  let weekName = week[currentDate.getDay()];
  let monthName = month[currentDate.getMonth()];

  const DATA = [
    {
      id: '3ac68afc-c6035-48d3-a4f8-fbd9123aa97f63',
      title: 'Second Item',
      description: "something here",
      completed: false,
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
    });
  }, [navigation]);

  const Item = ({ title, description, completed }) => (
    <View style={styles.item}>
      <Text>{completed ? "Completed" : "Uncompleted"}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Pressable onPress={() => !completed}>
      <Item title={item.title} description={item.description} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, styles.centerText]}>
        <Text style={styles.smallText}>{monthDay}</Text>
        <Text style={styles.smallText}>{weekName}</Text>
      </View>
      <View style={styles.bottonContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  bottonContainer: {
    flex: 4,
    flexDirection: "row",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  bigText: {
    color: "black",
    fontSize: 30,
  },
  smallText: {
    color: "black",
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});

export default HomeScreen;
