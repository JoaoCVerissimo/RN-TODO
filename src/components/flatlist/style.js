import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  uncompleted: {

  }
})

export default styles;
