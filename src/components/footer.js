import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Footer = ({ onClick, text }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.centerText]}>
        <View
          style={styles.below}>
        </View>
      </View>
      <View style={[styles.centerText]}>
        <TouchableOpacity
          onPress={onClick}
          style={styles.roundButton}>
          <Text style={styles.whiteText}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cbcbcb",
    opacity: 1,
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
    position: "absolute",
  },
  below: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#eee',
    position: "absolute",
  }
});

export default Footer;
