import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/header'
import GradientText from '../components/GradientText'

const Notification = () => {

    const eventsData = [
        {
            id: '1',
            time: '10:30 am - 11:00 am',
            name: 'Mr. Gaurav Kapoor',
            desc: 'Let’s begin the event by gaining knowledge about all the NSE.',
            backgroundColor: '#D9D9D9'
        },
        {
            id: '2',
            time: '11:15 am - 12:00 pm',
            name: 'Ms. Anjali Sharma',
            desc: 'A deep dive into stock market trends and investment strategies.',
            backgroundColor: 'white'
        },
        {
            id: '3',
            time: '12:30 pm - 01:15 pm',
            name: 'Dr. Rajeev Mishra',
            desc: 'Understanding financial risk management and portfolio diversification.',
            backgroundColor: '#D9D9D9'
        },
        {
            id: '4',
            time: '10:30 am - 11:00 am',
            name: 'Mr. Gaurav Kapoor',
            desc: 'Let’s begin the event by gaining knowledge about all the NSE.',
            backgroundColor: '#D9D9D9'
        },
        {
            id: '5',
            time: '11:15 am - 12:00 pm',
            name: 'Ms. Anjali Sharma',
            desc: 'A deep dive into stock market trends and investment strategies.',
            backgroundColor: 'white'
        },
        {
            id: '6',
            time: '12:30 pm - 01:15 pm',
            name: 'Dr. Rajeev Mishra',
            desc: 'Understanding financial risk management and portfolio diversification.',
            backgroundColor: '#D9D9D9'
        },
        {
            id: '7',
            time: '10:30 am - 11:00 am',
            name: 'Mr. Gaurav Kapoor',
            desc: 'Let’s begin the event by gaining knowledge about all the NSE.',
            backgroundColor: '#D9D9D9'
        },
        {
            id: '8',
            time: '11:15 am - 12:00 pm',
            name: 'Ms. Anjali Sharma',
            desc: 'A deep dive into stock market trends and investment strategies.',
            backgroundColor: 'white'
        },
        {
            id: '9',
            time: '12:30 pm - 01:15 pm',
            name: 'Dr. Rajeev Mishra',
            desc: 'Understanding financial risk management and portfolio diversification.',
            backgroundColor: '#D9D9D9'
        },
    ];

    const renderItem=({item,index})=>(
        <View style={[
            styles.eventCard,
            { backgroundColor: index % 2 !== 0 ? 'white' : '#D9D9D9' }
        ]}>
        <View style={styles.card_left_part}>
            <Image source={require('../assets/png/rectangleicon.png')} />
            <Text style={styles.time}>{item?.time}</Text>
        </View>
        <View style={styles.card_right_part}>
            <Text style={styles.name}>{item?.name} </Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </View>
    </View>
    )
    

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.headingText}>Event Itinerary</Text>
            <View style={styles.dateboxcontainer}>
                <View style={[styles.datebox, { backgroundColor: 'black' }]}><GradientText
                    text="06th Sept, 2024"
                    fontSize={18}
                    textStyle={{
                        fontWeight: "600",
                        fontSize: 18,
                        fontFamily: "Arial"
                    }}
                /></View>
                <View style={styles.datebox}><Text style={styles.dateboxText}>07th Sept, 2024</Text></View>
            </View>
            <View style={styles.eventContainer}>

            <FlatList
                data={eventsData}
                showsVerticalScrollIndicator={false} 
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 80 }} 
            />
              </View>
            
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 4,
        flex: 1
    },
    headingText: {
        textAlign: 'center',
        fontWeight: 300,
        fontFamily:'Albert Sans',
        fontSize: 22,
        marginTop: 8
    },
    dateboxcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    datebox: {
        width: '43%',
        height: 37,
        borderRadius: 35,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateboxText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },
    name: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily:'Albert Sans',

    },
    desc: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily:'Albert Sans',

    },
    time: {
        color: ' #000000',
        fontSize: 16,
        fontWeight: 300,
        fontFamily:'Albert Sans',

    },
    eventContainer: {
        flex: 1,
        width: '97%',
        borderRadius: 20,
        borderColor: '#BFBDC0',
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        marginTop: 20,
        marginInline: 'auto'
    },
    eventCard: {
        flexDirection: 'row',
        paddingVertical:5,
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9'
    },
    card_left_part: {
        flexDirection: 'row',
        gap: 1,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_right_part: {
        width: '48%',

    }
})
export default Notification