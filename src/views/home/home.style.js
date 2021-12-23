import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    backgroundColor: "#eee",
  },
  topRowContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
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
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
  },
})

export default styles;
