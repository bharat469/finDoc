import { View, Text, KeyboardAvoidingView, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInputWithIcon from '../components/textInputWithIcon';
import { COLORS } from '../helpers/colors';
import EmailIcon from '../assets/svg/message.svg';
import PhoneIcon from '../assets/svg/phone.svg';
import LocationIcon from '../assets/svg/location.svg';
import ProfileIcon from '../assets/svg/FormProfile.svg';
import CardIcon from '../assets/svg/card.svg';
import CheckboxGroup from '../components/checkboxGroup';
import DropdownInput from '../components/dropdownInput';
import Header from '../components/header';
import TermsCheckbox from '../components/termsCondition';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const BuyTicket = () => {
  return (
    <KeyboardAwareScrollView 
      style={{ flex: 1 }} 
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Header />
      <View style={styles.backgroundContainer}>
        <Image source={require('../assets/png/registration.png')} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.overlay}>
          <Image source={require('../assets/png/logo2.png')} style={styles.overlayImage} />
          <Text style={styles.overlayText}>ONLINE REGISTRATION</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInputWithIcon placeholders='Name' svgIcon={<ProfileIcon width={20} height={20} />} />
        <TextInputWithIcon placeholders='Email Id' svgIcon={<EmailIcon width={20} height={20} />} />
        <TextInputWithIcon placeholders='Mobile No' svgIcon={<PhoneIcon width={20} height={20} />} />
        <TextInputWithIcon placeholders='Address' svgIcon={<LocationIcon width={20} height={20} />} />
        <CheckboxGroup  title='Profile'/>
        <DropdownInput />
        <CheckboxGroup data={["Self Payment","Payment Through Company"]} />
        <TextInputWithIcon placeholders='Pan Card Number -Use Uppercase only' svgIcon={<CardIcon width={20} height={20} />} />
        <CheckboxGroup data={["Website/Email","Social Media","Friend","Others"]} title='How Did you hear about us?' />
        <TermsCheckbox/>
        <Button  />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: width,
    height: height / 3.4,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: 300,
    height: 100,
    marginBottom: 20,
  },
  overlayText: {
    color: COLORS.black || '#000',
    fontSize: 27,
    fontWeight: '700',
  },
  formContainer: {
    marginHorizontal: 12,
  },
});


export default BuyTicket