import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Investor", "Trader", "Learner", "Other"];

const CheckboxGroup = ({data=options,title=''}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <View style={styles.container}>
   {title&&<Text style={styles.title}>{title}</Text>}
      <View style={styles.checkboxRow}>
        {data.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxContainer}
            onPress={() => toggleOption(option)}
          >
            <View style={styles.checkbox}>{
              selectedOptions.includes(option) && <View style={styles.checked} />
            }</View>
            <Text style={styles.label}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:12,
    marginVertical:12
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: "#000",
  },
  label: {
    fontSize: 16,
  },
});

export default CheckboxGroup;
