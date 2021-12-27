import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import Footer from "../../components/footer/footer";
import FlatListRedux from '../../components/flatlist/flatlist';
import Header from '../../components/header/header';
import CompletedItems from '../../components/completedItems/completedItems';

import styles from "./home.style";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    let monthName = month[new Date().getMonth()];

    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
    });

  }, [navigation]);

  const handleEditClick = (id, title, description) => {
    navigation.push('Todo', { id: id, title: title, description: description })
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        {/* Aqui executa a função que lhe tenho de passar por parametro para filtrar os resultados */}
        <Header week={week} />
      </View>
      {/* Enviar o dia clicado que vai ser recebido por params do Header após dar push para aqui (Home)*/}
      <CompletedItems />
      <View style={[styles.middleContainer]}>
        {/* Enviar o dia clicado */}
        <FlatListRedux handleEditClick={(id, title, description) => handleEditClick(id, title, description)} />
      </View>
      <Footer onClick={() => navigation.push('Todo')} icon="plus" />
    </View>
  );
}

export default HomeScreen;
