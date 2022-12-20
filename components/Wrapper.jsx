import { StyleSheet, View } from "react-native";

const Wrapper = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 18,
    flex: 1,
    flexDirection: "column",
  },
});

export default Wrapper;
