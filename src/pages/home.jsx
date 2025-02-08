import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
import Carousal from '../components/carousal';
import {carosalFirst, carosalThree, carousalTwo} from '../helpers/json/carousal';
import ListItem from '../components/listItem';
import {Array1} from '../helpers/json/otherOptions';
import Offer from '../assets/svg/offer.svg';

const Home = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <Carousal data={carosalFirst} />
      <View style={{marginVertical: 22}}>
        <Carousal data={carousalTwo} mode="SECOND" />
      </View>
      <View>
        <ListItem data={Array1} />
      </View>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Offer />
      </TouchableOpacity>
      <View style={{marginVertical: 22}}>
      <Carousal data={carosalThree} mode='THIRD' />
      </View>
      <View style={{height:30}}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
