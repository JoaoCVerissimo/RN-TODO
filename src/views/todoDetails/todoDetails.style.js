import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  centerText: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 2,
    top: 20,
    marginHorizontal: 20,
  },
  descriptionContainer: {
    flex: 8,
    top: 20,
    marginHorizontal: 20,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
  }
});

export default styles;
