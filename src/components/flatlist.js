import React from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';

import styles from "../views/home/home.style";

import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';

const FlatListRedux = () => {
  const dispatch = useDispatch();

  const DATA = useSelector(state => state.todos); // Para ir buscar os dados à store com o nome "todos"

  const handleCheckboxClick = (id, completed) => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const Item = ({ title, description, completed }) => (
    <View style={styles.item}>
      <Text>{completed ? "Completed" : "Uncompleted"}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
    </View>
  );

  const renderItem = ({ item: { id, title, description, completed } }) => (
    <Pressable onPress={() => handleCheckboxClick(id, completed)}>
      <Item title={title} description={description} completed={completed} />
    </Pressable>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default FlatListRedux;
