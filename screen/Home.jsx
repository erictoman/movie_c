import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Wrapper from "../components/Wrapper";
import logo from "../assets/perfil.png";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
  return (
    <Wrapper>
      <View>
        <Image
          style={{ height: 204, width: "100%", borderRadius: 39 }}
          resizeMode="cover"
          source={logo}
        />
        <View style={styles.textoImagen}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ color: "white", marginBottom: 10 }}>
                Halo Infinite
              </Text>
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
    </Wrapper>
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

export default Home;
