import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Categories = ({ categoria, setCategoria }) => {
  const categories = ["All", "Action", "Comedy", "Horror"];
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        marginHorizontal: 27,
        marginBottom: 23,
      }}
    >
      {categories.map((elem) => {
        return (
          <Pressable
            onPress={() => {
              setCategoria(elem);
            }}
          >
            <View
              key={elem}
              style={{
                height: 28,
                width: 60,
                backgroundColor: categoria === elem ? "#FF692B" : null,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 35,
                marginHorizontal: 7.5,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {elem}
              </Text>
            </View>
          </Pressable>
        );
      })}
      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <Icon name="filter" style={{ color: "white" }} />
      </View>
    </View>
  );
};

export default Categories;
