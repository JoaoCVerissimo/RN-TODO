import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Footer from "../../components/footer";
import FlatListRedux from '../../components/flatlist';
import styles from "./home.style";
import Header from '../../components/header';

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    let monthName = month[new Date().getMonth()];

    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
    });

  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Header />
      </View>
      <View style={[styles.middleContainer]}>
        <FlatListRedux />
      </View>
      <Footer onClick={() => navigation.push('Todo')} text={"ADD"} />
    </View>
  );
}

export default HomeScreen;
