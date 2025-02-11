import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { KeyAspects } from "../helpers/json/keyAspects";
import { COLORS } from "../helpers/colors";

const {Height,Width}=Dimensions.get('window')
const KeyAspectsScreen = () => {

  const _renderItem=({item,index})=>{
  
   return(
    <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.number}>{item.id+1}</Text>
          </View>
          {index !== KeyAspects.length - 1 && <View style={styles.underline} />}
          </View>
   )
  }
    
  return (
    <View style={styles.container}>
      <FlatList
        data={KeyAspects}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginBottom:44}}
      />
  
    </View>
  );
};

export default KeyAspectsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginHorizontal:16
  },
  itemContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    letterSpacing:0.3
  },
  label: {
    flex:0.8,
    fontSize: 14,
    color: COLORS.black,
    fontWeight:'400',
    marginTop: 4,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryColor,
    borderStyle: 'solid',
    marginTop: 8,
  },
  number:{
    marginRight:12,
    fontSize:28,
    fontWeight:'900',
    color:COLORS.lightBorder
  }
});
