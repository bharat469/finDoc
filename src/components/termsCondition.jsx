import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Rect, Polyline} from 'react-native-svg';
import {COLORS} from '../helpers/colors';

const Checkbox = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          stroke={COLORS.black}
          strokeWidth="2"
          fill={checked ? COLORS.primaryColor : 'none'}
        />
        {checked && (
          <Polyline
            points="6,12 10,16 18,8"
            stroke={COLORS.white}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </Svg>
    </TouchableOpacity>
  );
};

const TermsCheckbox = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isAllChecked, setAllChecked] = useState(false);

  const toggleCheckbox1 = () => {
    const newChecked1 = !isChecked1;
    setChecked1(newChecked1);
    updateAllCheckbox(newChecked1, isChecked2);
  };

  const toggleCheckbox2 = () => {
    const newChecked2 = !isChecked2;
    setChecked2(newChecked2);
    updateAllCheckbox(isChecked1, newChecked2);
  };

  const toggleAllCheckbox = () => {
    const newValue = !isAllChecked;
    setChecked1(newValue);
    setChecked2(newValue);
    setAllChecked(newValue);
  };

  const updateAllCheckbox = (check1, check2) => {
    setAllChecked(check1 && check2);
  };

  return (
    <View style={styles.container}>
      {/* Agree to All
      <TouchableOpacity style={styles.row} onPress={toggleAllCheckbox}>
        <Checkbox checked={isAllChecked} onPress={toggleAllCheckbox} />
     
      </TouchableOpacity> */}

      {/* Individual Terms */}
      <TouchableOpacity style={styles.row} onPress={toggleCheckbox1}>
        <Checkbox checked={isChecked1} onPress={toggleCheckbox1} />
        <View>
          <Text style={styles.text}>
            Kindly Email the addhar card for check-in by travel desk on
            <Text style={{color: COLORS.primaryColor}}>
              {' '}
              rahat.mehra@myfindoc.com
            </Text>
          </Text>
          <Text style={styles.text}>
            Further, if you want to raise GST invoice, let us know on{' '}
            <Text style={{color: COLORS.primaryColor}}>
              {''} rahat.mehra@myfindoc.com
            </Text>
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={toggleCheckbox2}>
        <Checkbox checked={isChecked2} onPress={toggleCheckbox2} />
        <Text style={styles.text}>I agree all the terms and conditions.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default TermsCheckbox;
