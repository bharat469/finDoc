import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  PanResponder,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../components/header';
import {firstDate, secondDate} from '../helpers/json/eventItinerary';
import {COLORS} from '../helpers/colors';
import LinearGradient from 'react-native-linear-gradient';

const Notification = () => {
  const [isSelected, setIsSelected] = useState({
    isFirstDate: true,
    isSecondDate: false,
  });

  // Function to handle left and right swipe
  const handleSwipe = direction => {
    if (direction === 'left' && isSelected.isFirstDate) {
      setIsSelected({isFirstDate: false, isSecondDate: true});
    } else if (direction === 'right' && isSelected.isSecondDate) {
      setIsSelected({isFirstDate: true, isSecondDate: false});
    }
  };

  // Gesture detection for left/right swipes
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50) {
          // Left swipe
          handleSwipe('left');
        } else if (gestureState.dx > 50) {
          // Right swipe
          handleSwipe('right');
        }
      },
    })
  ).current;

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
    <ScrollView style={styles.container} {...panResponder.panHandlers}>
      <Header />
      <Text style={styles.headingText}>Event Itinerary</Text>
      <View style={styles.dateboxcontainer}>
        <LinearGradient
          colors={
            isSelected.isFirstDate ? ['#F08F27', '#F37748'] : ['#fff', '#fff']
          }
          style={styles.datebox}>
          <TouchableOpacity
            onPress={() =>
              setIsSelected({
                isFirstDate: true,
                isSecondDate: false,
              })
            }>
            <Text
              style={
                isSelected.isFirstDate ? styles.selectedDateText : styles.dateboxText
              }>
              28th March, 2025
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={
            isSelected.isSecondDate ? ['#F08F27', '#F37748'] : ['#fff', '#fff']
          }
          style={styles.datebox}>
          <TouchableOpacity
            onPress={() =>
              setIsSelected({
                isFirstDate: false,
                isSecondDate: true,
              })
            }>
            <Text
              style={
                isSelected.isSecondDate ? styles.selectedDateText : styles.dateboxText
              }>
              29th March, 2025
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={isSelected.isFirstDate ? firstDate : secondDate}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.eventContainer}
        />
        <View style={{height: 62}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headingText: {
    textAlign: 'center',
    fontWeight: '300',
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
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedDateText: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Arial',
    color: COLORS.white,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Albert Sans',
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Albert Sans',
  },
  time: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Albert Sans',
    paddingLeft: 12,
  },
  eventContainer: {
    borderRadius: 10,
    borderColor: '#BFBDC0',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 22,
    paddingVertical: 22,
  },
  eventCard: {
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 6,
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
