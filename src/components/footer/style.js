import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    opacity: 1,
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  centerText: {
    justifyContent: 'center',
    alignItems: "center",
  },
  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#2fafff',
    position: "absolute",
  },
  below: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#eee',
    position: "absolute",
  }
});

export default styles;
