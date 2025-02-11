import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {dynamicData} from '../helpers/json/offerJson';
import {COLORS} from '../helpers/colors';

const getRows = data => {
  return [
    data.slice(0, 3), // First row (3 items)
    data.slice(3, 5), // Second row (2 items)
    data.slice(5, 6), // Third row (1 item)
  ];
};

const DynamicBoxLayout = () => {
  const rows = getRows(dynamicData);

  return (
    <View style={styles.container}>
       {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[styles.row, rowIndex === 2 && styles.center]}>
          {row.map(item => (
            <View key={item.id} style={styles.box}>
              <Text style={styles.text}>{item.label}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBg,
    paddingVertical:22
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  center: {
    justifyContent: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
});

export default DynamicBoxLayout;
