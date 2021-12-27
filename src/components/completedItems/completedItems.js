import React from "react";
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedItems = () => {
  // Aqui tb tenho apenas de ir buscar o de determinado dia recebido por props
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return <Text style={{ marginLeft: 20 }}>Total completed items: {completedTodos.length}</Text>
};

export default CompletedItems;
