import { useNavigation } from "@react-navigation/core";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Card = ({
  height,
  width,
  image,
  title = "",
  rating = 0,
  onPress = null,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ height: height, width: width, marginRight: 31 }}
    >
      <Image
        style={{ height: "100%", width: "100%", borderRadius: 25 }}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        <View
          style={{
            height: 42,
            width: 140,
            marginHorizontal: 7,
            marginTop: 85,
            backgroundColor: "background: rgba(255, 255, 255, 0.2)",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "space-between",
            }}
          >
            <View style={{ flex: 2, marginLeft: 10 }}>
              <Text numberOfLines={1} style={{ color: "white" }}>
                {title}
              </Text>
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <Icon color={"gold"} name="star" size={13} />
                <Text style={{ color: "white" }}>{rating}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Icon
                style={{ alignSelf: "center" }}
                size={37}
                color={"white"}
                name="play"
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
