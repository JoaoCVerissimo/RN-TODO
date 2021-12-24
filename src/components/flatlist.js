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
import { getTodosAsync, toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const FlatListRedux = ({ handleEditClick }) => {
  const dispatch = useDispatch();

  const DATA = useSelector(state => state.todos); // Para ir buscar os dados à store com o nome "todos"

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch])

  const handleCheckboxClick = (id, completed) => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteTodoAsync({ id }));
  };

  const Item = ({ id, title, description, completed }) => (
    <View style={[styles.item, styles.rowContainer]}>
      <View style={{ width: "60%" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={{ position: "absolute", right: 0, top: "20%", marginRight: 10 }}>
        <Text>{completed ? "Completed" : "Uncompleted"}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button onPress={() => handleEditClick(id, title, description)} title="Edit" color="#2fafff"></Button>
          <Button onPress={() => handleDeleteClick(id)} title="Delete" color="red"></Button>
        </View>
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
