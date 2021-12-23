import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import Footer from "../../components/footer";
import styles from "./todoDetail.style";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';


const Todo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const sendingTodo = () => {
    if (title && description) {
      dispatch(addTodo({ title, description }));
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
      <Footer onClick={sendingTodo} text={"Add now"} />
    </View>
  )
}

export default Todo;
