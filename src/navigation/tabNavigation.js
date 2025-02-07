import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/Ionicons";
import { FloatingAction } from "react-native-floating-action";
import Home from "../pages/home";

// Dummy Screens

const ProfileScreen = () => <View style={styles.screen}><Text>Profile Screen</Text></View>;
const SettingsScreen = () => <View style={styles.screen}><Text>Settings Screen</Text></View>;

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabButton}>
            {/* <Icon name={options.tabBarIconName} size={24} color={isFocused ? "#007bff" : "#777"} /> */}
            <Text style={[styles.tabText, isFocused && { color: "#007bff" }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const FloatingButton = () => (
  <FloatingAction
    color="#007bff"
    // floatingIcon={<Icon name="add" size={24} color="#fff" />}
    // actions={[{ text: "Action", name: "action", icon: <Icon name="star" size={20} color="#fff" /> }]}
    onPressItem={(name) => alert(`${name} Pressed!`)}
  />
);

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        //   tabBarIconName: route.name === "Home" ? "home" : route.name === "Profile" ? "person" : "settings",
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <FloatingButton />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    elevation: 5,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: { alignItems: "center", justifyContent: "center" },
  tabText: { fontSize: 12, color: "#777", marginTop: 2 },
});

export default TabNavigation;
