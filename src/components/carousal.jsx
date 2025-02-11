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

const {width} = Dimensions.get('screen');

const Carousal = ({mode = 'FIRST', data = []}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length < 2) return; // Prevent scrolling for small lists

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
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


  const _firstCarousalDisplay = ({item}) => (
    <TouchableOpacity style={{marginHorizontal: 12}}>
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
        resizeMode='cover'
        style={styles.ThirdCarousalImage}
      />
    </TouchableOpacity>
  );

  const _secondCarousalDisplay = ({item}) => (
    <TouchableOpacity style={styles.secondCarousal}>
      <Image
        source={item?.image}
        resizeMode="cover"
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
          mode === 'FIRST' ? _firstCarousalDisplay :mode==='THIRD'?_ThirdCarousalDisplay : _secondCarousalDisplay
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
    borderRadius:18,
    marginVertical:12,
 
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
    paddingHorizontal:6,
    paddingTop:12
  },
  circularImage: {
    width: 105, // Must be equal to height for a perfect circle
    height: 125,
  },
});
