import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../helpers/colors';
import {offerData} from '../helpers/json/offerJson';
import Button from '../components/Button';
import Header from '../components/header';
import DynamicBoxLayout from '../components/DynamicBoxLayout';

const {width, height} = Dimensions.get('window');

const _handleRenderItem = ({item, index}) => {
  return (
    <View style={styles.showOfferStyle}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/png/offerbg.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <View style={styles.overlay}>
          <Button btnName="Early Bird Offer" btnStyles={styles.btnStyle} />
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.subStringStyle}>({item?.accormodation})</Text>
          <View
            style={{
              borderBottomWidth: 1, // Line thickness
              borderBottomColor: COLORS.black, // Line color (change to white if needed)
              borderStyle: 'dashed', // Makes it a dashed line
              width: width / 1.5, // Full width
              marginVertical: 10,
            }}
          />
          <View>
            <Text style={styles.discountPriceStyle}>{item?.discountPrice}</Text>
            <Text style={styles.totalPriceStyle}>{item?.realPrice}</Text>
            <Text style={styles.subScript}>per person</Text>
          </View>
          <View style={styles.couponViewStyle}>
            <Text style={styles.couponText}>
              Coupon Code :
              <Text
                style={{fontWeight: '800', fontSize: 18, letterSpacing: 0.4}}>
                {item?.couponCode}
              </Text>
            </Text>
            <Text style={styles.couponSubstring}>
              *Offer Valid till:{' '}
              <Text
                style={{fontWeight: '800', fontSize: 18, letterSpacing: 0.4}}>
                {item?.offerValidTill}
              </Text>
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.black,
              borderStyle: 'dashed',
              width: width / 1.5, // Full width
              marginVertical: 10, // Space around the line
            }}
          />
          <Button btnName="BOOK NOW" btnStyles={styles.btnStyle} />
        </View>
      </View>
    </View>
  );
};
const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header />

      <FlatList
        data={offerData}
        renderItem={_handleRenderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{height: height / 9}} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: width / 1.1,
    // height:height/2,
    // marginHorizontal:22
  },
  imageContainer: {
    position: 'relative', // Allows overlay positioning
    width: width / 1.1,
  },
  showOfferStyle: {
    alignItems: 'center',

    // marginVertical: 12,
  },
  btnStyle: {
    backgroundColor: COLORS.black,
    marginVertical: 6,
    bottom: 0,
    paddingHorizontal: 22,
  },
  overlay: {
    position: 'absolute',
    top: 226,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    height: height / 3.6,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    marginHorizontal: 33,
    textAlign: 'center',
    color: COLORS.black,
    marginVertical: 12,
  },
  subStringStyle: {
    fontSize: 18,
    color: COLORS.black,

    marginHorizontal: 33,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 34,
  },
  discountPriceStyle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.black,
  },
  totalPriceStyle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.black,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  subScript: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '700',
    marginLeft: 44,
    marginVertical: 6,
  },
  couponViewStyle: {
    marginVertical: 12,
  },
  couponText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },
  couponSubstring: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },

});
