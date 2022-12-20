import { ScrollView, Text, View } from "react-native";
import Wrapper from "../components/Wrapper";
import IconEntypo from "react-native-vector-icons/Entypo";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import api, { TOP_RATE, URL_IMAGE } from "../api";
import { useNavigation } from "@react-navigation/core";
import Banner from "../components/Banner";

const Home = () => {
  const [categoria, setCategoria] = useState("All");
  const [topRated, setTopRated] = useState([]);
  const nav = useNavigation();

  const getTopRate = async () => {
    const res = await api.get(TOP_RATE);
    let resTemp = res.results.map((elem) => {
      return { ...elem, image: URL_IMAGE + elem.poster_path };
    });
    setTopRated(resTemp);
  };

  useEffect(() => {
    getTopRate();
  }, []);
  return (
    <Wrapper>
      <View>
        <Categories categoria={categoria} setCategoria={setCategoria} />
        <Banner />
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
          {topRated?.map((elem) => {
            return (
              <Card
                onPress={() => {
                  nav.navigate("detalle", elem);
                }}
                key={elem.id}
                image={elem.image}
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

export default Home;
