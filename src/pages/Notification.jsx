import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import GradientText from '../components/GradientText';
import {firstDate, secondDate} from '../helpers/json/eventItinerary';
import {COLORS} from '../helpers/colors';
import LinearGradient from 'react-native-linear-gradient';

const Notification = () => {
  const [isSelected, setIsSelected] = useState({
    isFirstDate: true,
    isSecondDate: false,
  });

  const renderItem = ({item, index}) => (
    <View
      style={[
        styles.eventCard,
        {backgroundColor: index % 2 !== 0 ? 'white' : '#D9D9D9'},
      ]}>
      <View style={styles.card_left_part}>
        <Image source={require('../assets/png/rectangleicon.png')} />
        <Text style={styles.time}>{item?.time}</Text>
      </View>
      <View style={styles.card_right_part}>
        <Text style={styles.name}>{item?.name} </Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headingText}>Event Itinerary</Text>
      <View style={styles.dateboxcontainer}>
        <LinearGradient
          colors={
            isSelected.isFirstDate ? ['#F08F27', '#F37748'] : ['#fff', '#fff']
          }
          style={[
            styles.datebox,
            // isSelected.isFirstDate && {backgroundColor: COLORS.moreBlack},
          ]}>
          <TouchableOpacity
            onPress={() =>
              setIsSelected({
                ...isSelected,
                isFirstDate: true,
                isSecondDate: false,
              })
            }>
            {isSelected.isFirstDate ? (
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  fontFamily: 'Arial',
                  color: COLORS.white,
                }}>
                06th Sept, 2024
              </Text>
            ) : (
              <Text style={styles.dateboxText}>06th Sept, 2024</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={
            isSelected.isSecondDate ? ['#F08F27', '#F37748'] : ['#fff', '#fff']
          }
          style={[
            styles.datebox,
            // isSelected.isFirstDate && {backgroundColor: COLORS.moreBlack},
          ]}>
          <TouchableOpacity
        
            onPress={() =>
              setIsSelected({
                ...isSelected,
                isSecondDate: true,
                isFirstDate: false,
              })
            }>
            {isSelected.isSecondDate ? (
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  fontFamily: 'Arial',
                  color: COLORS.white,
                }}>
                07th Sept, 2024
              </Text>
            ) : (
              <Text style={styles.dateboxText}>07th Sept, 2024</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.eventContainer}>
        <FlatList
          data={isSelected.isFirstDate ? firstDate : secondDate}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 80}}
        />
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,

    flex: 1,
  },
  headingText: {
    textAlign: 'center',
    fontWeight: 300,
    fontFamily: 'Albert Sans',
    fontSize: 22,
    marginTop: 8,
  },
  dateboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datebox: {
    flex: 1,
    borderRadius: 35,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  dateboxText: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'Albert Sans',
  },
  desc: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Albert Sans',
  },
  time: {
    color: ' #000000',
    fontSize: 16,
    fontWeight: 300,
    fontFamily: 'Albert Sans',
    paddingLeft:12
  },
  eventContainer: {
    // flex: 1,
    // width: '97%',
    borderRadius: 20,
    borderColor: '#BFBDC0',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    marginTop: 20,
    // marginInline: 'auto',
  },
  eventCard: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
  },
  card_left_part: {
    flexDirection: 'row',
    gap: 1,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_right_part: {
    width: '48%',
  },
});
export default Notification;
