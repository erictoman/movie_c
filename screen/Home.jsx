import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <View style={styles.categorias}>
        <View>
          <Text style={{ color: "white" }}>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

export default Home;
