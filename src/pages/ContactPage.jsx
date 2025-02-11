import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../helpers/colors";
import Header from "../components/header";

// Contact Data (Simulating JSON API Response)
const contactData = {
  person: "Mr. Sunil Kumar",
  address:
    "Unit no A-37, Ground floor, Pacific Business Park, Plot no 37/1, Shahibabad Site IV, Industrial Area, Ghaziabad 201010, Uttar Pradesh",
  phone: "9803251000",
  email: "helpdesk@myfindoc.com",
  hours: "10 AM - 6 PM (Mon-Fri)",
};

// SVG Icons
const icons = {
  person: (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <Path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm-9 9v-2c0-2.67 5.33-4 9-4s9 1.33 9 4v2H3z" />
    </Svg>
  ),
  address: (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <Path d="M12 2C8.13 2 5 5.13 5 9c0 5 7 11 7 11s7-6 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </Svg>
  ),
  phone: (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <Path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.25 11.36 11.36 0 003.58.6 1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.6 3.58 1 1 0 01-.25 1.11l-2.2 2.2z" />
    </Svg>
  ),
  email: (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
  ),
  hours: (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <Path d="M12 8v5l3.25 1.95.75-1.23-2.5-1.47V8H12z" />
      <Path d="M12 4a8 8 0 108 8 8.01 8.01 0 00-8-8m0 14a6 6 0 116-6 6 6 0 01-6 6z" />
    </Svg>
  ),
};

// Contact Page Component
const ContactPage = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <Header/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Customer Care</Text>

      {/* Mapping Contact Data */}
      {Object.entries(contactData).map(([key, value]) => (
        <View key={key} style={styles.section}>
          <View style={styles.icon}>{icons[key]}</View>
          <View>
            <Text style={styles.label}>{key.replace(/^\w/, (c) => c.toUpperCase())}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   borderWidth:1,
   marginHorizontal:22,
   marginVertical:22,
   padding:22,
   borderColor:COLORS.primaryColor,
   borderRadius:12,
   shadowColor: COLORS.primaryColor,
   shadowOpacity: 0.1,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 4,
   elevation: 3,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    // textAlign: "center",
    color: COLORS.primaryColor,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    width:250,
    lineHeight:24
  },
});

export default ContactPage;
