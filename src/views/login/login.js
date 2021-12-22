import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

function LogInPage({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    console.log(email, password, password.length);
    (validateEmail(email) && password.length > 8) ?
      navigation.navigate('Home')
      :
      navigation.navigate('Auth');
  }

  const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, styles.centerText]}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
          maxLength={40}
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          maxLength={20}
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
