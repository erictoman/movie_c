import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Input = ({
  label = "Etiqueta",
  placeholder = "Placeholder",
  isPassword,
}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.contenedor}>
      <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
        {label}
      </Text>
      <View style={styles.contenedorInput}>
        <TextInput
          placeholder={placeholder}
          style={{
            color: "white",
            shadowColor: "#9C9C9C",
            flex: 8,
            padding: 15,
          }}
          secureTextEntry={isPassword && show}
          placeholderTextColor="#9C9C9C"
        />
        {isPassword && (
          <Pressable
            style={{
              flex: 1,
            }}
            onPress={() => {
              setShow(!show);
            }}
          >
            <Icon size={16} color={"white"} name={show ? "eye" : "eye-off"} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 78,
    width: "100%",
    marginVertical: 11,
  },
  contenedorInput: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    flexDirection: "row",
    borderRadius: 11,
    height: 47,
    marginVertical: 10,
    alignContent: "center",
    alignItems: "center",
  },
});

export default Input;
