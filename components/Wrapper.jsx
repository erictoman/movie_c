import { StatusBar, StyleSheet, View } from "react-native";

const Wrapper = ({ children }) => {
  StatusBar.currentHeight;
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 18,
    marginTop: 9 + StatusBar.currentHeight,
    flex: 1,
    flexDirection: "column",
  },
});

export default Wrapper;
