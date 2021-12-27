import React from "react";
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedItems = ({ date }) => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true && todo.date === date)
  );
  return <Text style={{ marginLeft: 20 }}>Total completed items: {completedTodos.length}</Text>
};

export default CompletedItems;
