import { Image, StyleSheet, Text, View } from "react-native";
import perfil from "../assets/perfil.png";
import BotonPerfil from "../components/BotonPerfil";
import Wrapper from "../components/Wrapper";

const Profile = () => {
  return (
    <Wrapper>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image
            borderRadius={130}
            style={{ height: 130, width: 130, margin: 11 }}
            source={perfil}
          />
          <Text style={styles.principal}>Eric Trejo</Text>
          <Text style={styles.sub}>Developer</Text>
        </View>
        <View style={styles.barra}></View>
        <View></View>
        <View>
          <Text style={{ ...styles.subtop, color: "#9C9C9C" }}>Joined</Text>
          <Text style={{ ...styles.subtop, color: "#FFF" }}>2 mon ago</Text>
        </View>
      </View>
      <View style={styles.botones}>
        <BotonPerfil icon="information-circle-sharp" title="My Info" />
        <BotonPerfil icon="settings" title="Setting" />
        <BotonPerfil icon="shield-sharp" title="Policy" />
        <BotonPerfil
          iconColor={"#F14B4B"}
          icon="exit-outline"
          title="Sign Out"
          arrow={false}
          width={150}
        />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    flexDirection: "column",
    margin: 0,
  },
  principal: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    lineHeight: 18.75,
  },
  sub: {
    fontSize: 16,
    color: "#9C9C9C",
    lineHeight: 18.75,
  },
  subtop: {
    fontSize: 16,
    lineHeight: 18.75,
  },
  barra: {
    width: 2,
    height: 83,
    backgroundColor: "#9C9C9C",
  },
  botones: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 14,
  },
});

export default Profile;
