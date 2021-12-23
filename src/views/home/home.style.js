import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    backgroundColor: "#eee",
  },
  rowContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  middleContainer: {
    flex: 8,
    backgroundColor: "#eee",
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  bigText: {
    color: "black",
    fontSize: 30,
  },
  title: {
    fontSize: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});

export default styles;
