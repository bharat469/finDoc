import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../helpers/colors';
const {Width} = Dimensions.get('window');
const ListItem = ({data = []}) => {
  const _renderData = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.containerBorder}>
        <View style={styles.containerSecondary}>
          {item?.icon}
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{item?.title}</Text>
            <Text style={styles.subStyle}>{item?.substring}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={_renderData} numColumns={2} />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerBorder: {
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 12,
    width: 170,

    borderRadius: 18,
  },
  containerSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  textContainer: {
    marginLeft: 10, // Space between icon and text
  },
  textStyle: {
    fontSize: 20,

    color: '#000',
  },
  subStyle: {
    fontSize: 20,
    color: COLORS.black,
    marginTop: 2, // Space between title and subtitle
    fontWeight: 'bold',
  },
});
