import React, { useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  Button,
} from 'react-native';

import styles from "../views/home/home.style";

import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import { getTodosAsync } from '../redux/todoSlice';

const FlatListRedux = () => {
  const dispatch = useDispatch();

  const DATA = useSelector(state => state.todos); // Para ir buscar os dados à store com o nome "todos"

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch])

  const handleCheckboxClick = (id, completed) => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const Item = ({ id, title, description, completed }) => (
    <View style={[styles.item, styles.rowContainer]}>
      <View style={{ width: "70%" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{description}</Text>
      </View>
      <View style={{ position: "absolute", right: 0, top: "20%", marginRight: 10 }}>
        <Text>{completed ? "Completed" : "Uncompleted"}</Text>
        <Button onPress={() => handleDeleteClick(id)} title="Delete" color="#841584"></Button>
      </View>
    </View>
  );

  const renderItem = ({ item: { id, title, description, completed } }) => (
    <Pressable onPress={() => handleCheckboxClick(id, completed)}>
      <Item id={id} title={title} description={description} completed={completed} />
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
