import { View, Text, KeyboardAvoidingView, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
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
import PhonePePaymentSDK  from 'react-native-phonepe-pg'
import Base64 from 'react-native-base64'
import sha256 from 'sha256'

const { width, height } = Dimensions.get('window');

const BuyTicket = () => {
  const [environment,setEnvironment]=useState("SANDBOX")
  const [merchantId,setMerchantId]=useState('M22CLOQR2ISXJ')
  const[appId,setAppId]=useState('com.findoc')
  const[enableLogging,setEnableLogging]=useState(true)
  const [detail,setDetail]=useState({
    name:'',
    emailId:'',
    mobileNo:'',
    address:'',
    pancard:''
  })

  const generateTransactionId=()=>{
    const timestamp= Date.now();
    const random = Math.floor(Math.random()*1000000)
    const merchantPrefix="T"
    return `${merchantPrefix}${timestamp}${random}`
  }

  const BuyTicket = () => {
    PhonePePaymentSDK 
      .init(environment, merchantId, appId, enableLogging)
      .then((resp) => {
        console.log("PhonePe SDK Initialized:", resp);
  
        const requestBody = {
          merchantId: merchantId,
          merchantTransactionId: generateTransactionId(), // Ensure uniqueness
          merchantUserId: "9815991291",
          amount: 1 * 100, // Amount in paise
          paymentInstrument: {
            type: "PAY_PAGE",
          },
        };
  
        console.log("Request Body:", requestBody);
  
        const salt_key = "047027d7-c181-45b8-b087-812852111bf7";
        const salt_Index = 1;
  
        const payload = JSON.stringify(requestBody);
        const payload_main = Base64.encode(payload);
        console.log("Encoded Payload:", payload_main);
  
        const string = payload_main + "/pg/v1/pay" + salt_key;
        console.log("String for Checksum:", string);
  
        const checksum = sha256(string) + "###" + salt_Index;
        console.log("Generated Checksum:", checksum);
  
        PhonePePaymentSDK 
          .startTransaction(payload_main, checksum, null, null)
          .then((resp) => {
            console.log("Transaction Response:", resp);
          })
          .catch((err) => {
            console.error("Transaction Error:", err);
          });
      })
      .catch((err) => {
        console.error("PhonePe SDK Init Error:", err);
      });
  };
  

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
        <TextInputWithIcon placeholders='Name' svgIcon={<ProfileIcon width={20} height={20}  />} value={detail.name} setValue={(text)=>setDetail({...detail,name:text})} />
        <TextInputWithIcon placeholders='Email Id' svgIcon={<EmailIcon width={20} height={20} />} value={detail.emailId} setValue={(text)=>setDetail({...detail,emailId:text})} />
        <TextInputWithIcon placeholders='Mobile No' svgIcon={<PhoneIcon width={20} height={20} />} value={detail.mobileNo} setValue={(text)=>setDetail({...detail,mobileNo:text})}/>
        <TextInputWithIcon placeholders='Address' svgIcon={<LocationIcon width={20} height={20} />} value={detail.address} setValue={(text)=>setDetail({...detail,address:text})}/>
        <CheckboxGroup  title='Profile'/>
        <DropdownInput />
        <CheckboxGroup data={["Self Payment","Payment Through Company"]} />
        <TextInputWithIcon placeholders='Pan Card Number -Use Uppercase only' svgIcon={<CardIcon width={20} height={20} />} value={detail.pancard} setValue={(text)=>setDetail({...detail,pancard:text})}/>
        <CheckboxGroup data={["Website/Email","Social Media","Friend","Others"]} title='How Did you hear about us?' />
        <TermsCheckbox/>
        <Button onPress={BuyTicket} />
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