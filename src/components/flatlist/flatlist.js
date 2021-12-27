import React, { useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  Button,
} from 'react-native';

import styles from "./style";

import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync, toggleCompleteAsync, deleteTodoAsync } from '../../redux/todoSlice';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';

const FlatListRedux = ({ handleEditClick, date }) => {
  const dispatch = useDispatch();

  const today = new Date().getDate();
  const TODOs = useSelector(state => state.todos);
  const DATA = useSelector(state => state.todos.filter((todo) => todo.date === date));

  useEffect(() => {
    dispatch(getTodosAsync()); // Vou buscar todos à API e depois é que filtro no selector os que quero
    clearOutdated();
  }, [dispatch])

  const clearOutdated = () => {
    TODOs.map((todo, index) => {
      if (today === 1 && todo.date >= 24 && todo.date <= 31) handleDeleteClick(todo.id);
      if (today === 8 && todo.date >= 1 && todo.date <= 7) handleDeleteClick(todo.id);
      if (today === 15 && todo.date >= 8 && todo.date <= 14) handleDeleteClick(todo.id);
      if (today === 24 && todo.date >= 15 && todo.date <= 23) handleDeleteClick(todo.id);
    })
  }

  const handleCheckboxClick = (id, completed) => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteTodoAsync({ id }));
  };

  const Item = ({ id, title, description, completed, date }) => (
    <View style={[styles.item, styles.rowContainer]}>
      <View style={{ width: "60%" }}>
        <Text style={completed ? [styles.title, styles.completed] : [styles.title]}>{title}</Text>
        <Text style={completed ? [styles.description, styles.completed] : [styles.description]}>{description}</Text>
      </View>
      <View style={{ right: 0, marginRight: 10 }}>
        {
          completed ?
            null :
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Button onPress={() => handleEditClick(id, title, description, date)} title="Edit" color="#2fafff"></Button>
              <Icon name={"pen"} size={10} color="#111" />
              <Button onPress={() => handleDeleteClick(id)} title="Delete" color="red"></Button>
              <Icon name={"trash"} size={10} color="#111" />
            </View>
        }
        <CheckBox
          title="Done"
          checked={completed}
          onPress={() => handleCheckboxClick(id, completed)}
        />
      </View>
    </View>
  );

  const renderItem = ({ item: { id, title, description, completed, date } }) => (
    <Pressable >
      <Item id={id} title={title} description={description} completed={completed} date={date} />
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
