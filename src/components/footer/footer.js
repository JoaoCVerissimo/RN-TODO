import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from "./style";

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

export default Footer;
