import { View, Text, StyleSheet, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox'; // For checkboxes (Expo users may need expo-checkbox)
import { Picker } from '@react-native-picker/picker';
import LinearGradient from "react-native-linear-gradient";

const Register = () => {
    const [selectedRole, setSelectedRole] = useState('Learner');

    return (
        <ScrollView style={styles.container}>
            <Header />
            <ImageBackground
                source={require('../../assets/images/findocs.jpg')}
                resizeMode='cover'
                style={styles.backgroundimage}
            >
                <Image source={require('../../assets/images/logoimage.png')}
                    style={styles.logoimage}
                />
                <Text style={styles.logotext}>ONLINE REGISTRATION</Text>
            </ImageBackground>
            <View style={styles.inputwrapper}>
                <View style={styles.inputbox}>
                    <Icon name="person" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="Name" style={styles.input} />
                </View>

                <View style={styles.inputbox}>
                    <Icon name="email" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
                </View>

                <View style={styles.inputbox}>
                    <Icon name="phone" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="Phone" style={styles.input} keyboardType="phone-pad" />
                </View>

                <View style={styles.inputbox}>
                    <Icon name="location-on" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="Address" style={styles.input} />
                </View>

                <View style={styles.divider} />

                <Text style={styles.checkboxTitle}>Profile</Text>
                <View style={styles.maincheckbox}>
                    {['Investor', 'Trader', 'Learner', 'Other'].map((role) => (
                        <View key={role} style={styles.checkboxContainer}>
                            <CheckBox
                                value={selectedRole === role}
                                onValueChange={() => setSelectedRole(role)}
                                tintColors={{ true: '#ff7700', false: 'gray' }}
                            />
                            <Text style={styles.checkboxLabel}>{role}</Text>
                        </View>
                    ))}
                </View>

                <View style={[styles.divider, { marginTop: 20 }]} />

                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>How many persons attend the event? </Text>
                    <View style={[styles.pickerbox, { marginTop: 2 }]}>
                        <Picker
                            selectedValue={selectedRole}
                            onValueChange={(itemValue) => setSelectedRole(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Attendees" value="Attendees" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                        </Picker>
                    </View>
                </View>
                <Text style={[styles.pickerLabel, { width: '95%', marginInline: 'auto', marginTop: 10 }]}>Non Stay Amount</Text>
                <View style={[styles.inputbox, { marginTop: 4 }]}>
                    <Icon name="currency-rupee" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="0" style={styles.input} keyboardType="numeric" />
                </View>

                <View style={[styles.divider, { marginTop: 20 }]} />

                <View style={styles.maincheckbox}>
                    {['Self Payment', 'Payment Through Company'].map((role) => (
                        <View key={role} style={styles.checkboxContainer}>
                            <CheckBox
                                value={selectedRole === role}
                                onValueChange={() => setSelectedRole(role)}
                                tintColors={{ true: '#ff7700', false: 'gray' }}
                            />
                            <Text style={styles.checkboxLabel}>{role}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.inputbox}>
                    <Icon name="credit-card" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="Pan Card Number - Use Uppercase Only " style={styles.input} maxLength={10} autoCapitalize="characters" />
                </View>
                <View style={styles.divider} />

                <Text style={styles.checkboxTitle}>How did you hear about us ?</Text>
                <View style={styles.maincheckbox}>
                    {['Website/Email', 'Social Media', 'Friend', 'Other'].map((role) => (
                        <View key={role} style={styles.checkboxContainer}>
                            <CheckBox
                                value={selectedRole === role}
                                onValueChange={() => setSelectedRole(role)}
                                tintColors={{ true: '#ff7700', false: 'gray' }}
                            />
                            <Text style={[styles.checkboxLabel, { fontSize: 10 }]}>{role}</Text>
                        </View>
                    ))}
                </View>
                <LinearGradient
                    colors={["#F08F27", "#F37748"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buyTicketButton}
                >
                    <TouchableOpacity style={{flex:1, height:40, justifyContent:'center',alignItems:'center', borderRadius:20}}>
                        <Text style={{fontSize:20,fontWeight:600,color:'white'}}>Register</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backgroundimage: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buyTicketButton:{
      borderRadius:10,
      marginBottom:10,
      marginTop:10,
      width:'95%',
      marginInline:'auto'
    },
    logoimage: {
        width: 165,
        height: 55,
        resizeMode: 'contain',
    },
    logotext: {
        fontSize: 22,
        color: 'black',
        fontWeight: 500,
        marginTop: 15
    },
    buyTicketTouchable: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    inputwrapper: {
        width: '98%',
        marginInline: 'auto',
        paddingTop: 10
    },
    inputbox: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        width: '95%',
        marginTop: 10,
        marginInline: 'auto'
    },
    pickerbox: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 5,
        width: '100%',
        marginTop: 10,
        marginInline: 'auto'
    },
    buyTicketTouchable: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
    divider: {
        height: 1,
        width: '95%',
        marginInline: 'auto',
        backgroundColor: '#d6d6d6',
        marginTop: 20
    },
    icon: {
        marginRight: 10,
    },
    maincheckbox: {
        flexDirection: 'row',
        width: '95%',
        gap: 4,
        marginInline: 'auto'
    },
    checkboxTitle: {
        fontSize: 16,
        width: '94%',
        marginInline: 'auto',
        fontWeight: '500',
        marginTop: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center'
    },
    checkboxLabel: {
        fontSize: 14,
        marginLeft: 1,
    },
    pickerWrapper: {
        width: '95%',
        marginTop: 10,
        marginInline: 'auto',
        backgroundColor: 'white'
    },
    pickerLabel: {
        fontSize: 15,
        marginBottom: 10,
        fontWeight: 700
    },
    picker: {
        width: '100%',

    },
})

export default Register