import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Wrapper from "../components/Wrapper";
import logo from "../assets/perfil.png";
import Icon from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import api, { TOP_RATE, URL_IMAGE } from "../api";

const Home = () => {
  const [categoria, setCategoria] = useState("All");
  const [topRated, setTopRated] = useState([]);

  const getTopRate = async () => {
    const res = await api.get(TOP_RATE);
    setTopRated(res.results);
  };

  useEffect(() => {
    getTopRate();
  }, []);
  return (
    <Wrapper>
      <View>
        <Categories categoria={categoria} setCategoria={setCategoria} />
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
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 21,
                lineHeight: 24.61,
                marginVertical: 16,
                color: "white",
                flex: 1,
              }}
            >
              Popular
            </Text>
            <IconEntypo
              style={{ color: "#FF722A" }}
              name="dots-three-horizontal"
              size={25}
            />
          </View>
        </View>
        <ScrollView horizontal contentContainerStyle={{ flexDirection: "row" }}>
          {topRated.map((elem) => {
            return (
              <Card
                image={URL_IMAGE + elem.poster_path}
                height={132}
                width={153}
                title={elem.original_title}
                rating={Math.floor(elem.vote_average / 5)}
              />
            );
          })}
        </ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 21,
                lineHeight: 24.61,
                marginVertical: 16,
                color: "white",
                flex: 1,
              }}
            >
              You may like
            </Text>
            <IconEntypo
              style={{ color: "#FF722A" }}
              name="dots-three-horizontal"
              size={25}
            />
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
