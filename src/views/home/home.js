import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import Footer from "../../components/footer";
import FlatListRedux from '../../components/flatlist';
import Header from '../../components/header';
import CompletedItems from '../../components/completedItems';

import styles from "./home.style";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
        <Header />
      </View>
      <CompletedItems />
      <View style={[styles.middleContainer]}>
        <FlatListRedux handleEditClick={(id, title, description) => handleEditClick(id, title, description)} />
      </View>
      <Footer onClick={() => navigation.push('Todo')} text={"ADD"} />
    </View>
  );
}

export default HomeScreen;
