import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginHorizontal: 3,
  },
  topRowContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
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
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  week: {
    fontSize: 14,
  },
  month: {
    fontSize: 14,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  daysBackground: {
    backgroundColor: "#05b5ff",
    borderWidth: 1,
    borderStyle: 1,
  }
})

export default styles;
