import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Profile from '../assets/svg/profile.svg';
import { COLORS } from '../helpers/colors';

const TextInputWithIcon = ({
  value = '',
  setValue = () => {},
  placeholders = '',
  svgIcon = null,
}) => {
  return (
    <View style={styles.container}>
      {svgIcon ? svgIcon : <Profile style={styles.icon} />}

      <TextInput
        placeholder={placeholders}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={COLORS.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  marginVertical:6
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
   
    marginLeft:12
  },
});

export default TextInputWithIcon;
