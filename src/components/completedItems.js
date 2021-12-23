import React from "react";
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return <Text style={{ marginLeft: 20 }}>Total completed items: {todos.length}</Text>
};

export default CompletedItems;
