import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({ onClick, icon }) => {
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
          <Text style={styles.whiteText}><Icon name={icon} size={30} color="#fff" solid /></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    opacity: 1,
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#2fafff',
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
