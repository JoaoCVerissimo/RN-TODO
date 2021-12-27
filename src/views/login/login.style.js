import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
  backgroundColor: {
    backgroundColor: "#ccc",
    borderRadius: 30,
    width: 120,
    fontWeight: "bold",
  },
  email: {
    marginBottom: 40,
  },
  password: {
    marginBottom: 60,
  }
});

export default styles;
