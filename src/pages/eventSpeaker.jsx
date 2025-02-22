import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../helpers/colors';
import Header from '../components/header';
import {carousalTwo} from '../helpers/json/carousal';
import SepratorComponent from '../components/separator';

const {height,width}=Dimensions.get('window')
const EventSpeaker = () => {
  const [numOfRow, setNumOfRow] = useState(2);
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.secondCarousal}>
          <Image source={item?.image} style={styles.circularImage} resizeMode='contain' />
        </View>
        <Text style={styles.nameStyle}>{item?.name}</Text>
        <Text style={styles.jobTitle}>{item?.jobTitle}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header />
      <View style={styles.containerMain}>
        {/* <Text style={styles.eventTextStyle}>Event Speaker</Text> */}
        <SepratorComponent title="Event Speakers" />
        <FlatList
          data={carousalTwo}
          renderItem={_renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={numOfRow}
         contentContainerStyle={{marginVertical:12}}
        />
      </View>
        <View style={{height:height/3}} />
    </View>
  );
};

export default EventSpeaker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  secondCarousal: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 152.5, // Half of width/height makes it circular
    overflow: 'hidden', // Ensures image stays within the circle
    borderWidth: 2, // Optional: Add a border
    borderColor: '#fff', // Optional: Border color
    backgroundColor: 'rgb(226, 121, 22)',
    paddingHorizontal: 6,
    paddingTop: 12,
  },
  circularImage: {
    width: 125, // Must be equal to height for a perfect circle
    height: 125,
  },
  containerMain: {alignItems: 'center',height:height/1.2},
  nameStyle:{
    fontSize:18,
    color:'rgb(226, 121, 22)',
    fontWeight:'700'
  },
  jobTitle:{
    fontSize:15,
    color:COLORS.black,
    fontWeight:'600'
  },
  eventTextStyle:{
    fontSize:22,
    letterSpacing:0.5,
    color:COLORS.black,
    fontWeight:'600'
  }
});
