import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#f00"}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Meu perfil",
          headerShown: false,
          tabBarLabel: () => <Text>Meu perfil</Text>,
          tabBarIcon: ({ size, color, focused }) => {
            const nameIcon = focused ? "home" : "home-outline"

            return <Ionicons name={nameIcon} color={color} size={size}/>
          }
        }}
      />
    </Tab.Navigator>
  );
}
