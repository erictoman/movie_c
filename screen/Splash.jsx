import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";
import colors from "../utils/colors";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image style={styles.imagen} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  imagen: {
    width: 222,
    height: 222,
  },
});

export default Splash;
