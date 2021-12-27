import React, { useLayoutEffect, useState } from 'react';
import { View, Button } from 'react-native';
import Footer from "../../components/footer/footer";
import FlatListRedux from '../../components/flatlist/flatlist';
import Header from '../../components/header/header';
import CompletedItems from '../../components/completedItems/completedItems';

import styles from "./home.style";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function HomeScreen({ navigation }) {
  const today = new Date().getDate();
  const [selectedDay, setSelectedDay] = useState(today);

  useLayoutEffect(() => {
    let monthName = month[new Date().getMonth()];

    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Auth")}
          title="Logout"
          color="red"
        />)
    });

  }, [navigation]);

  const handleEditClick = (id, title, description, date) => {
    navigation.push('Todo', { id: id, title: title, description: description, date: date })
  };

  //Função que vai ser executada apos clicar num dos dias do calendário
  const handleSearchClick = (date) => {
    console.log("hoje é dia " + date)
    setSelectedDay(date);
    // mudar o style dos botões selecionados/não selecionados. talvez?
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        <Header handleSearchClick={(date) => handleSearchClick(date)} week={week} />
      </View>
      <CompletedItems date={selectedDay} />
      <View style={[styles.middleContainer]}>
        <FlatListRedux handleEditClick={(id, title, description, date) => handleEditClick(id, title, description, date)} date={selectedDay} />
      </View>
      <Footer onClick={() => navigation.push('Todo', { date: selectedDay })} icon="plus" />
    </View>
  );
}

export default HomeScreen;
