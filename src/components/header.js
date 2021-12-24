import React from "react";
import {
  Text,
  View,
  Pressable,
} from 'react-native';

import styles from "../views/home/home.style";

import { nanoid } from 'nanoid'

const Header = ({ week }) => {
  const currentDate = new Date();
  let monthDay = currentDate.getDate();

  const handleSearchClick = (dia) => {
    // filtrar a pesquisa abaixo
    // para fazer isto, também tenho de filtrar logo ao inicio para o dia de hoje
    console.log("hoje é dia " + dia)
  }

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
