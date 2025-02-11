import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";


import Users from '../assets/svg/group.svg'
import ChevronDown from '../assets/svg/downArow.svg'
import { COLORS } from "../helpers/colors";

const DropdownInput = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const options = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const selectValue = (value) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How many Person attend the event?</Text>
      <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.inputContainer}>
        <Users  style={styles.iconLeft} />
        <TextInput
          style={styles.input}
          value={selectedValue}
          placeholder="Attendees"
          editable={false}
          placeholderTextColor={COLORS.black}
        />
        <ChevronDown style={styles.iconRight} />
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => selectValue(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    marginHorizontal:12,
    marginVertical:12
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
  },
  iconLeft: {
    marginRight: 5,
  },
  iconRight: {
    marginLeft: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
    maxHeight: 150,
    backgroundColor: "white",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default DropdownInput;
