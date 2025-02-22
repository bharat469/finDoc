import { 
    ImageBackground, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Dimensions, 
    FlatList,
    Image
  } from 'react-native';
  import React from 'react';
  import { COLORS } from '../helpers/colors';
  import Header from '../components/header';
import { eventsImage } from '../helpers/json/event';
  
  const { height, width } = Dimensions.get('window');
  
  const EventVenue = () => {
    const _renderItem=({item,index})=>{
      return(
        <View style={{marginHorizontal:12,marginVertical:22}}>
          <Image source={item?.image}  style={{width:200,height:200}}/>
        </View>
      )
    }
    return (
      <ImageBackground
        source={require('../assets/png/venue.png')}
        resizeMode='cover'
        style={{ flex: 1 }}
      >
        {/* Header Section */}
        <View style={{ backgroundColor: COLORS.white }}>
          <Header />
        </View>
  
        {/* Centered Content */}
        <View style={styles.centeredContainer}>
          <FlatList
          data={eventsImage}
          renderItem={_renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
          <View style={styles.tiltedContainer}>
  
  
            {/* Main Content */}
            <View style={styles.content}>
              <Text style={styles.title}>Novotel Jaipur Convention Centre</Text>
              <Text style={styles.subtitle}>RAJASTHAN</Text>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.button}>{'Get Direction →'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  export default EventVenue;
  
  const styles = StyleSheet.create({
    centeredContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height / 10,
    },
    tiltedContainer: {
      width: width / 1.1,
      height: height / 5,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      overflow: "hidden",
      padding:12
    },
    content: {
        zIndex: 2,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical:12
      },

    title: {
      color: COLORS.white,
      fontSize: 20,
      textTransform:'uppercase',
      fontWeight: '800',
      textAlign: "center",
      letterSpacing:1
    },
    subtitle: {
      color: COLORS.white,
      fontSize: 19,
      textAlign: "center",
      marginVertical: 12,
      fontWeight:'700',
      letterSpacing:1
    },
    btnContainer:{
         borderWidth:1,
         alignItems:'center',
        //  width:width/3,
         borderColor:COLORS.white,
         marginHorizontal:62,
         borderRadius:12,
         backgroundColor:COLORS.primaryColor,
    },
    button: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '700',
      paddingVertical:8,
      paddingHorizontal:16
    },
  });
  