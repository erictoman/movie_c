import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label = "Etiqueta", placeholder = "Placeholder" }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={{
          height: 47,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 11,
          padding: 15,
          color: "white",
          shadowColor: "#9C9C9C",
          marginVertical: 10,
        }}
        placeholderTextColor="#9C9C9C"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 78,
    width: "100%",
    marginVertical: 11,
  },
});

export default Input;
