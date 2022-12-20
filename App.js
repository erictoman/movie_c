import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import TabBar from "./components/TabBar";
import Detail from "./screen/Detail";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Profile from "./screen/Profile";
import Register from "./screen/Register";
import Splash from "./screen/Splash";
import colors from "./utils/colors";
import theme from "./utils/theme";

export default function App() {
  const [loading, setLoading] = useState(true);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Splash />;

  const BottomNav = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            marginHorizontal: 18,
            paddingHorizontal: 0,
          },
          headerShadowVisible: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          options={{ logo: "ios-home", title: "Hi, Eric" }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ logo: "search" }}
          name="Home2"
          component={Home}
        />
        <Tab.Screen options={{ logo: "star" }} name="Home3" component={Home} />
        <Tab.Screen
          options={{ logo: "person", headerShown: false }}
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    );
  };

  const Principal = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
          animation: "none",
        }}
        theme={theme}
        initialRouteName="principal"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="principal"
          component={BottomNav}
        />
        <Stack.Screen
          options={{ title: "Sign up" }}
          name="registro"
          component={Register}
        />
        <Stack.Screen
          options={{ title: "Login" }}
          name="ingreso"
          component={Login}
        />
        <Stack.Screen
          name="detalle"
          component={Detail}
        />

      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={theme}>
      <Principal />
    </NavigationContainer>
  );
}
