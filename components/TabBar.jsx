import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../utils/colors";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.barra}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const { logo = null } = options;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {logo ? (
                <Icon
                  color={"white"}
                  size={20}
                  name={isFocused ? `${logo}` : `${logo}-outline`}
                />
              ) : (
                <Text
                  style={{
                    color: isFocused ? "white" : "rgba(196, 196, 196, 0.1)",
                  }}
                >
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barra: {
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    flexDirection: "row",
    height: 65,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    marginBottom: 4.5,
    paddingBottom: 4.5,
    borderRadius: 59,
  },
  contenedor: {
    backgroundColor: colors.background,
  },
});

export default TabBar;
