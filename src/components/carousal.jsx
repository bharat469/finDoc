import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SepratorComponent from './separator';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const Carousal = ({mode = 'FIRST', data = []}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    if (data.length < 2) return; // Prevent scrolling for small lists

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        let nextIndex = prevIndex + 1;

        if (nextIndex >= data.length) nextIndex = 0; // Loop back to first item

        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
          viewPosition: 0.5, // Keeps items centered
        });

        return nextIndex;
      });
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  const _handleFirstCarosel = () => {
    navigation.navigate('BuyTicket')
  };

  const _firstCarousalDisplay = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: 12}}
      onPress={_handleFirstCarosel}>
      <Image
        source={item?.banner}
        resizeMode="contain"
        style={styles.firstCarousalImage}
      />
    </TouchableOpacity>
  );
  const _ThirdCarousalDisplay = ({item}) => (
    <TouchableOpacity style={{marginHorizontal: 12}}>
      <Image
        source={item?.banner}
        resizeMode="cover"
        style={styles.ThirdCarousalImage}
      />
    </TouchableOpacity>
  );

  const _secondCarousalDisplay = ({item}) => (
    <TouchableOpacity style={styles.secondCarousal}>
      <Image
        source={item?.image}
        resizeMode='contain'
        style={styles.circularImage}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {mode === 'SECOND' && <SepratorComponent title="Speakers" />}
      {mode === 'THIRD' && <SepratorComponent title="Event Videos" />}
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item, index) => index.toString()} // Ensure unique keys
        renderItem={
          mode === 'FIRST'
            ? _firstCarousalDisplay
            : mode === 'THIRD'
            ? _ThirdCarousalDisplay
            : _secondCarousalDisplay
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={mode === 'FIRST'} // Enable snapping for first mode
        // getItemLayout={(data, index) => ({
        //   length: mode === 'FIRST' ? 362 : 105, // Item width
        //   offset: (mode === 'FIRST' ? 362 : 120) * index, // Offset
        //   index,
        // })}
        // contentContainerStyle={{padHorizontal: mode === 'FIRST' ? 0 : 10}}
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  firstCarousalImage: {
    width: 362,
    height: 200,
    marginHorizontal: 12,
  },
  ThirdCarousalImage: {
    width: 302,
    height: 160,
    marginHorizontal: 12,
    borderRadius: 18,
    marginVertical: 12,
  },
  secondCarousal: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
    marginVertical: 12,
    borderRadius: 100, // Ensures a perfect circle
    overflow: "hidden", // Ensures image stays inside the border
      padding:6
  },
  circularImage: {
    width: 105, // Must be equal to height for a perfect circle
    height: 105,
  },
});
