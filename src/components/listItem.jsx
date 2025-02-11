import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/colors';

const {width} = Dimensions.get('window');

const ListItem = ({data = []}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();

  const handlePress = (item, index) => {
    setSelectedIndex(index); // Highlight selected item
    switch(item?.id){
      case 0:
        navigation.navigate('Notification');
        break;
      case 3:
        navigation.navigate('Attendes');  
        break;
      default:
        break;  
    }
  };

  const _renderData = ({item, index}) => {
    const isSelected = selectedIndex === index;

    return (
      <TouchableOpacity
        style={[
          styles.containerBorder,
          {backgroundColor: isSelected ? COLORS.primaryColor : 'white'}, // Highlight color
        ]}
        onPress={() => handlePress(item, index)}>
        <View style={styles.containerSecondary}>
          {isSelected ? <Image source={item?.Wicon} style={{width:41,height:42}}  resizeMode='contain'/> : item?.icon}
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
      <FlatList
        data={data}
        renderItem={_renderData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
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
    marginHorizontal: 6,
    marginVertical: 12,
    width: width / 2.4,
    borderRadius: 18,
    borderColor: COLORS.black,
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
