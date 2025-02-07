import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../helpers/colors';



const SepratorComponent = (props) => {
    const {title='or'}=props
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default SepratorComponent;

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightBorder,
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: COLORS.black,
  },
});