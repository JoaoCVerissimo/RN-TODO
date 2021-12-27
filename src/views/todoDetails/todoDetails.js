import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import Footer from "../../components/footer/footer";
import styles from "./todoDetails.style";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, addTodoAsync, editTodoAsync } from '../../redux/todoSlice';


const Todo = ({ navigation, route }) => {
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const id = route?.params?.id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setUpdate(true);
      setTitle(route?.params?.title);
      setDescription(route?.params?.description);
    }
  }, [])

  const sendingTodo = () => {
    if (title && description && update === false) {
      dispatch(addTodoAsync({ title, description }));
      navigation.navigate('Home');
    } else if (title && description && update === true) {
      dispatch(editTodoAsync({ id, title, description }));
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>TITLE</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
          placeholder="Title"
          onChangeText={setTitle}
          value={title}
          maxLength={30}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>DESCRIPTION</Text>
        <TextInput
          style={{ height: 40, borderColor: '#aaa', borderWidth: 1 }}
          placeholder="Description"
          onChangeText={setDescription}
          value={description}
          maxLength={300}
        />
      </View>
      <Footer onClick={sendingTodo} icon={update ? "save" : "plus"} />
    </View>
  )
}

export default Todo;