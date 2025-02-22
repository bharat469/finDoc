import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../helpers/colors";

const ContactUsComponent = () => {
  const contactData = [
    {
      person: "Mr. Sunil Kumar",
      phone: "+919803251000",
      email: "helpdesk@myfindoc.com",
    },
    {
      person: "Mr. Ishan Sharma",
      phone: "+919803252000",
      email: "ishan.sharma@myfindoc.com",
    },
  ];
  


  const icons = {
    person: (
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="#958d89">
        <Path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm-9 9v-2c0-2.67 5.33-4 9-4s9 1.33 9 4v2H3z" />
      </Svg>
    ),
    phone: (
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="#958d89">
        <Path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.25 11.36 11.36 0 003.58.6 1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.6 3.58 1 1 0 01-.25 1.11l-2.2 2.2z" />
      </Svg>
    ),
    email: (
      <Svg width="20" height="20" viewBox="0 0 24 24" fill="#958d89">
        <Path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </Svg>
    ),
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contact Us</Text>

        {contactData.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Name Section */}
            <View style={styles.section}>
              <View style={styles.icon}>{icons.person}</View>
              <Text style={styles.label}>{item.person}</Text>
            </View>

            {/* Phone Section */}
            <View style={styles.section}>
              <View style={styles.icon}>{icons.phone}</View>
              <Text style={styles.value}>{item.phone}</Text>
            </View>

            {/* Email Section */}
            <View style={styles.section}>
              <View style={styles.icon}>{icons.email}</View>
              <Text style={styles.value}>{item.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactUsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.lightBg,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Adds shadow (Android)
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginLeft: 5,
  },
});
