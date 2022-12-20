import { useNavigation } from "@react-navigation/core";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../assets/perfil.png";

const Banner = ({ title = "Halo infinite", image }) => {
  const nav = useNavigation();
  nav.setOptions({ title });
  return (
    <View>
      <Image
        style={{ height: 204, width: "100%", borderRadius: 39 }}
        resizeMode="contain"
        resizeMethod="resize"
        source={image ? { uri: image } : logo}
      />
      <View style={styles.textoImagen}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Icon color={"gold"} name="star" size={13} />
              <Text style={{ color: "white" }}>5.0</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon size={37} color={"white"} name="play" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textoImagen: {
    position: "absolute",
    height: 204,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
});

export default Banner;
