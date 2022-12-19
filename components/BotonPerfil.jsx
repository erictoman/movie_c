import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BotonPerfil = ({
  icon = "pencil",
  title = "Boton1",
  iconColor = "white",
  arrow = true,
  width = "100%",
  onPress = null,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.boton, width, alignSelf: "flex-start" }}
    >
      <Icon
        size={28}
        name={icon}
        style={{ ...styles.icon, color: iconColor }}
      />
      <Text style={styles.titulo}>{title}</Text>
      {arrow && (
        <Icon
          size={28}
          name="chevron-forward"
          style={{ ...styles.icon, color: "white" }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    marginVertical: 10,
    marginHorizontal: 16,
  },
  titulo: {
    color: "white",
    flex: 2,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  boton: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 47,
    width: "100%",
    borderRadius: 29,
    marginVertical: 22.5,
    flexDirection: "row",
    alignContent: "space-between",
  },
});

export default BotonPerfil;
