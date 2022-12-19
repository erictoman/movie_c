import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";

const Register = () => {
  const nav = useNavigation();
  return (
    <Wrapper>
      <Text style={{ color: "#9C9C9C" }}>
        Sign up with one of following options
      </Text>
      <View style={styles.botones}>
        <View style={styles.boton}>
          <Icon style={{ color: "white" }} size={19.3} name="md-logo-apple" />
        </View>
        <View style={styles.boton}>
          <Icon style={{ color: "white" }} size={19.3} name="md-logo-google" />
        </View>
      </View>
      <View>
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Password" />
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
});

export default Register;
