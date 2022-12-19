import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const nav = useNavigation();
  return (
    <Wrapper>
      <Text style={{ color: "#9C9C9C" }}>
        Sign up with one of following options
      </Text>
      <View style={styles.botones}>
        <TouchableOpacity style={styles.boton}>
          <Icon style={{ color: "white" }} size={19.3} name="md-logo-apple" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton}>
          <Icon style={{ color: "white" }} size={19.3} name="md-logo-google" />
        </TouchableOpacity>
      </View>
      <View>
        <Input placeholder="Enter your email" label="Email" />
        <Input isPassword placeholder="Enter your password" label="Password" />
      </View>
      <TouchableOpacity style={{ marginVertical: 50 }}>
        <LinearGradient
          colors={["rgba(255, 114, 42, 0)", "#FF722A"]}
          start={[0.0, 0.5]}
          end={[0.2, 0.5]}
          locations={[0.0, 1.0]}
          style={styles.botonRegistro}
        >
          <Text>Create Account</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#9C9C9C",
            lineHeight: 21,
            fontWeight: "400",
            textAlign: "center",
            marginHorizontal: 5,
          }}
        >
          Don't have an account?
        </Text>
        <Text
          onPress={() => {
            nav.navigate("registro");
          }}
          style={{
            fontSize: 18,
            color: "white",
            lineHeight: 21,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Sign up
        </Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  botones: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 42,
  },
  boton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    height: 57,
    width: 158,
    borderRadius: 11,
  },
  botonRegistro: {
    height: 47,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
