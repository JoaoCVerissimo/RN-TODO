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

import { CheckBox } from 'react-native-elements';

const FlatListRedux = ({ handleEditClick }) => { // Recebo aqui o dia em questão
  const dispatch = useDispatch();

  const DATA = useSelector(state => state.todos); // Aqui tinha de mudar para ir buscar apenas dados filtrados de um dia enviado pelo screen home

  useEffect(() => {
    dispatch(getTodosAsync()); // Aqui também só vou buscar os que correspondem ao determinado dia
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
        <Text style={completed ? [styles.title, styles.completed] : [styles.title]}>{title}</Text>
        <Text style={completed ? [styles.description, styles.completed] : [styles.description]}>{description}</Text>
      </View>
      <View style={{ right: 0, marginRight: 10 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button onPress={() => handleEditClick(id, title, description)} title="Edit" color="#2fafff"></Button>
          <Button onPress={() => handleDeleteClick(id)} title="Delete" color="red"></Button>
        </View>
        <CheckBox
          title="Done"
          checked={completed}
          onPress={() => handleCheckboxClick(id, completed)}
        />
      </View>
    </View>
  );

  const renderItem = ({ item: { id, title, description, completed } }) => (
    <Pressable >
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
