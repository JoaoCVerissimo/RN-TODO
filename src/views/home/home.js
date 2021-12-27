import React, { useLayoutEffect } from 'react';
import { View, Button } from 'react-native';
import Footer from "../../components/footer/footer";
import FlatListRedux from '../../components/flatlist/flatlist';
import Header from '../../components/header/header';
import CompletedItems from '../../components/completedItems/completedItems';

import styles from "./home.style";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function HomeScreen({ navigation }) {
  const monthDay = new Date().getDate();

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
    // mudar o style dos botões selecionados/não selecionados. talvez?
    // executar uma função que vai filtrar os dados e ser executada aqui
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        {/* Aqui executa a função que lhe tenho de passar por parametro para filtrar os resultados de acordo com o dia */}
        <Header handleSearchClick={(date) => handleSearchClick(date)} week={week} />
      </View>
      {/* Enviar o dia clicado para filtrar e apenas contar os do dia selecionado*/}
      <CompletedItems date={monthDay} />
      <View style={[styles.middleContainer]}>
        {/* Enviar o dia clicado para filtrar os resultados */}
        <FlatListRedux handleEditClick={(id, title, description, date) => handleEditClick(id, title, description, date)} date={monthDay} />
      </View>
      {/* Aqui mando o dia tambem para ao adicionar enviar o dia junto ao adicionar tasks */}
      <Footer onClick={() => navigation.push('Todo', { date: monthDay })} icon="plus" />
    </View>
  );
}

export default HomeScreen;
