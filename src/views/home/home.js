import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, styles.centerText]}>
        <Text style={styles.text}>Teste top</Text>
      </View>
      <View style={styles.bottonContainer}>
        <View style={[styles.leftContainer, styles.centerText]}>
          <Text style={styles.text}>Teste left</Text>
        </View>
        <View style={[styles.rightContainer, styles.centerText]}>
          <Text style={styles.text}>Teste right</Text>
        </View>
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
    backgroundColor: "#aaa",
  },
  bottonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  leftContainer: {
    flex: 2,
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
});

export default HomeScreen;
