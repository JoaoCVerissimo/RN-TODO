import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginHorizontal: 3,
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  week: {
    fontSize: 14,
  },
  month: {
    fontSize: 14,
  },
  daysBackground: {
    backgroundColor: "#05b5ff",
    borderWidth: 1,
    borderStyle: 1,
  },
  selected: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  }
})

export default styles;
