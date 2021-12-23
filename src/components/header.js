import React from "react";
import {
  Text,
  View,
} from 'react-native';

import styles from "../views/home/home.style";

import { nanoid } from 'nanoid'

const Header = () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  let monthDay = currentDate.getDate();

  return (
    <>
      {
        week.map((weekDay, index) => {
          return (
            <View key={index} style={[styles.topContainer, styles.centerText]}>
              {(monthDay + index) > 31 ?
                <Text key={nanoid()} style={styles.title}>{monthDay + index - 31}</Text>
                :
                <Text key={nanoid()} style={styles.title}>{monthDay + index}</Text>}

              {(currentDate.getDay() + index > 6) ?
                <Text key={nanoid()} style={styles.title}>{week[currentDate.getDay() + index - 7]}</Text>
                :
                <Text key={nanoid()} style={styles.title}>{week[currentDate.getDay() + index]}</Text>
              }
            </View>
          )
        })
      }
    </>
  )
}

export default Header;
