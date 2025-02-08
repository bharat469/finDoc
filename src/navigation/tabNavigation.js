import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import HomeIcon from "../assets/svg/Home.svg";
import SearchIcon from "../assets/svg/search.svg";
import NotificationIcon from "../assets/svg/notification.svg";
import ProfileIcon from "../assets/svg/profile.svg";

import Home from "../pages/home";
import Search from "../pages/Search";
import BuyTicket from "../pages/BuyTicket";
import Notification from "../pages/Notification";
import ProfileScreen from "../pages/ProfileScreen";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  console.log("navigation", descriptors)
  console.log("state", state)
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index == index;

        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        console.log("IsFucsed", isFocused);
        const activeColor = "#007bff";
        const inactiveColor = "#777";

        const icons = {
          Home: <HomeIcon width={26} height={26} fill={isFocused ? activeColor : inactiveColor} />,
          Search: <SearchIcon width={26} height={26} />,
          Notification: <NotificationIcon width={26} height={26} fill={isFocused ? activeColor : inactiveColor} />,
          Profile: <ProfileIcon width={26} height={26} fill={isFocused ? activeColor : inactiveColor} />,
        };

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

        return route.name === "BuyTicket" ? (
          <View style={{ width: 80, height: 50,backgroundColor:'white', justifyContent: 'center', alignItems: 'center' }}>

           <View style={{height:45,width:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',borderBottomRightRadius:40,borderBottomLeftRadius:40}}>
           <LinearGradient
              colors={["#F08F27", "#F37748"]} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buyTicketButton}
            >
              <TouchableOpacity key={index} onPress={onPress} style={styles.buyTicketTouchable}>
                <Text style={styles.buyTicketText}>Buy Ticket</Text>
              </TouchableOpacity>
            </LinearGradient>
            </View>
          </View>
        ) : (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabButton}>
            {icons[route.name]}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="BuyTicket" component={BuyTicket} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 10,
    right: 0,
    backgroundColor: "white",
    elevation: 5,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  tabButton: { alignItems: "center", justifyContent: "center",height:50, flex: 1,backgroundColor:'white' },
  buyTicketButton: {
    position: "absolute",
    top: -25,
    width: 64,
    height: 64,
    borderRadius: 100, 
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },

  }, buyTicketTouchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100, 
  },
  buyTicketText: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 14,
  },
});

export default TabNavigation;
