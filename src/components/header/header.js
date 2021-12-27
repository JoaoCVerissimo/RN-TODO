import React from "react";
import {
  Text,
  View,
  Pressable,
} from 'react-native';

import styles from "./style";

import { nanoid } from 'nanoid'

const Header = ({ handleSearchClick, week }) => {
  const currentDate = new Date();
  let monthDay = currentDate.getDate();

  return (
    <>
      {
        week.map((weekDay, index) => {
          return (
            <View key={index} style={[styles.topContainer, styles.centerText, styles.daysBackground]}>
              {(monthDay + index) > 31 ?
                <Pressable key={nanoid()} onPress={() => handleSearchClick(monthDay + index - 31)}>
                  <Text key={nanoid()} style={styles.month}>{monthDay + index - 31}</Text>
                </Pressable>
                :
                <Pressable key={nanoid()} onPress={() => handleSearchClick(monthDay + index)}>
                  <Text key={nanoid()} style={styles.month}>{monthDay + index}</Text>
                </Pressable>
              }
              {(currentDate.getDay() + index > 6) ?
                <Text key={nanoid()} style={styles.week}>{week[currentDate.getDay() + index - 7]}</Text>
                :
                <Text key={nanoid()} style={styles.week}>{week[currentDate.getDay() + index]}</Text>
              }
            </View>
          )
        })
      }
    </>
  )
}

export default Header;
