import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import Footer from "../../components/footer";
import FlatListRedux from '../../components/flatlist';
import Header from '../../components/header';
import CompletedItems from '../../components/completedItems';

import styles from "./home.style";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    let monthName = month[new Date().getMonth()];

    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
    });

  }, [navigation]);

  const handleEditClick = (id, title, description) => {
    navigation.push('Todo', { id: id, title: title, description: description })
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        <Header week={week} />
      </View>
      <CompletedItems />
      <View style={[styles.middleContainer]}>
        <FlatListRedux handleEditClick={(id, title, description) => handleEditClick(id, title, description)} />
      </View>
      <Footer onClick={() => navigation.push('Todo')} icon="plus" />
    </View>
  );
}

export default HomeScreen;
