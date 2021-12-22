import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

function LogInPage({ navigation, route }) {

  function validate() {
    // get username and password
    // validate log in
    // redirect
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, styles.centerText]}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }} placeholder="Email Address"
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }} placeholder="Password"
        />
        <Button
          title="Log In"
          onPress={validate}
          color="black"
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
    backgroundColor: "#aaa",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
});

export default LogInPage;
