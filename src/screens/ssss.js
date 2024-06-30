import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';


    const channels = [
   
        {
            name: "Saut ul Quran",
            link: "https://whmsonic.radio.gov.pk:7002/stream?type=http&nocache=7",
            poster: "https://www.radio.gov.pk/images/logos/sautulquran.jpg"
        },
        {
            name: "Planet FM 87.6",
            link: "https:\/\/whmsonic.radio.gov.pk:7042\/stream?type=http&nocache=12",
            poster: "https:\/\/radio.gov.pk\/WhatsApp%20Image%202022-12-01%20at%2010.49.20%20PM.jpeg"
        },
        {
            name: "FM 101 Islamabad",
            link: "https:\/\/whmsonic.radio.gov.pk:7008\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Islamabad Station",
            link: "https:\/\/whmsonic.radio.gov.pk:7003\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FMIslamabadStation.jpg"
        },
        {
            name: "Current Affairs Channel",
            link: "https:\/\/whmsonic.radio.gov.pk:7004\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/CurrentAffairs.jpg"
        },
        {
            name: "World Service",
            link: "https:\/\/whmsonic.radio.gov.pk:7005\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/WorldService.jpg"
        },
        {
            name: "Sports & Health Channel",
            link: "https:\/\/whmsonic.radio.gov.pk:7007\/stream?type=http&nocache=7",
            poster: "https:\/\/radio.gov.pk\/images\/sports.jpg"
        },
        {
            name: "External Service",
            link: "https:\/\/whmsonic.radio.gov.pk:7006\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/ExternalService.jpg"
        },
        {
            name: "FM 101 Bahawalpur",
            link: "https:\/\/whmsonic.radio.gov.pk:8020\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "MW Bahawalpur",
            link: "https:\/\/whmsonic.radio.gov.pk:8092\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 93 Faisalabad",
            link: "https:\/\/whmsonic.radio.gov.pk:8022\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FM93Faisalabad.jpg"
        },
        {
            name: "FM 101 Faisalabad",
            link: "https:\/\/whmsonic.radio.gov.pk:8024\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Lahore",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/101lahore",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Lahore MW",
            link: "https:\/\/whmsonic.radio.gov.pk:8026\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Lahore-MW.jpg"
        },
        {
            name: "FM 93 Lahore",
            link: "https:\/\/whmsonic.radio.gov.pk:8088\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FM 93 LAHORE.png"
        },
        {
            name: "FM 93 Mianwali",
            link: "https:\/\/whmsonic.radio.gov.pk:8028\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Mianwali.jpg"
        },
        {
            name: "FM 93 Multan",
            link: "https:\/\/whmsonic.radio.gov.pk:7014\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 101 Multan",
            link: "https:\/\/whmsonic.radio.gov.pk:8032\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Multan MW 1035KHz",
            link: "https:\/\/whmsonic.radio.gov.pk:8034\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 93 Rawalpindi",
            link: "https:\/\/whmsonic.radio.gov.pk:8036\/relay?type=http&nocache=9",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FM93Rawalpindi.jpg"
        },
        {
            name: "FM 101 Sialkot",
            link: "https:\/\/whmsonic.radio.gov.pk:8038\/relay?type=http&nocache=9",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Sargodha",
            link: "https:\/\/whmsonic.radio.gov.pk:8040\/relay?type=http&nocache=9",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Hyderabad MW 1008KHz",
            link: "https:\/\/whmsonic.radio.gov.pk:8042\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/hyderabad.jpg"
        },
        {
            name: "FM 101 Hyderabad",
            link: "https:\/\/whmsonic.radio.gov.pk:8044\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FM 101 Hyderabad.png"
        },
        {
            name: "FM 93 Karachi",
            link: "https:\/\/whmsonic.radio.gov.pk:7022\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 101 Karachi",
            link: "https:\/\/whmsonic.radio.gov.pk:8048\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Larkana",
            link: "https:\/\/whmsonic.radio.gov.pk:8050\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Mithi",
            link: "https:\/\/whmsonic.radio.gov.pk:8052\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Khairpur",
            ink: "https:\/\/whmsonic.radio.gov.pk:8054\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "MW 639 Karachi",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/MW639khi",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 101.4 Bhitshah",
            link: "https:\/\/whmsonic.radio.gov.pk:8098\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 101 Quetta",
            link: "https:\/\/whmsonic.radio.gov.pk:8058\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Quetta MW",
            link: "https:\/\/whmsonic.radio.gov.pk:8060\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Quetta.jpg"
        },
        {
            name: "Khuzdar MW",
            link: "https:\/\/whmsonic.radio.gov.pk:8062\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "FM 101 Abbotabad",
            link: "https:\/\/whmsonic.radio.gov.pk:8064\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 93 Chirtal",
            link: "https:\/\/whmsonic.radio.gov.pk:8066\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/FM 93 CHITRAL.png"
        },
        {
            name: "FM 101 Kohat",
            link: "https:\/\/whmsonic.radio.gov.pk:8068\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "FM 101 Peshawar",
            link: "https:\/\/whmsonic.radio.gov.pk:8070\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
        {
            name: "Peshawar MW",
            link: "https:\/\/whmsonic.radio.gov.pk:8072\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Peshawar.jpg"
        },
        
        {
            name: "AK-RADIO-Tararkhel",
            link: "https:\/\/whmsonic.radio.gov.pk:8076\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/AK-RADIO-Tarakhel.jpg"
        },
        {
            name: "FM 101 Mirpur",
            link: "https:\/\/whmsonic.radio.gov.pk:8078\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/101ISLAMABAD.jpg"
        },
     {
            name: "FM 93 Muzaffarabad",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/93muzaffarabad?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "D.I Khan MW 711",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/Dikhan?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
       
        {
            name: "Gilgit MW",
            link: "https:\/\/whmsonic.radio.gov.pk:8082\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "Chalte Chalte",
            link: "https:\/\/whmsonic.radio.gov.pk:7008\/stream?type=http&nocache=7",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Chaltay Chaltay 3.jpg"
        },
    
        {
            name: "Health",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/Health",
            poster: "https:\/\/radio.gov.pk\/images\/health.jpg"
        },
        {
            name: "Technology channel",
            link: "https:\/\/whmsonic.radio.gov.pk:8094\/stream?type=http&nocache=12",
            poster: "https:\/\/radio.gov.pk\/images\/WhatsApp%20Image%202023-02-10%20at%2014.30.45.jpg"
        },
        {
            name: "Environment",
            link: "https:\/\/whmsonic.radio.gov.pk:8102\/stream?type=http&nocache=12",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/MWBahawalpur.jpg"
        },
        {
            name: "Kids",
            link: "https:\/\/whmsonic.radio.gov.pk:7000\/Kids",
            poster: "https:\/\/radio.gov.pk\/images\/kids.jpg",
        },
        {
            name: "Live Sports",
            link: "#",
            poster: "https://www.radio.gov.pk/images/logos/Blank.jpg"
        },
        {
            name: "Punjab",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Sindh",
            link: "#", 
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Balochistan",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Balochistan",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Khyber Pakhtunkhwa",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Azad Jammu and Kashmir",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
        {
            name: "Gilgit-Baltistan",
            link: "#",
            poster: "https:\/\/www.radio.gov.pk\/images\/logos\/Blank.jpg"
        },
    ];
    


const numColumns = 2;
const { width } = Dimensions.get('window');
const itemSize = width / numColumns;

const Home = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                {item.poster && (
                    <Image source={{ uri: item.poster }} style={styles.image} />
                )}
                <Text style={styles.name}>{item.name}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={channels}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: itemSize - 20,
        height: itemSize - 20,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    name: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
    },
});

export default Home;
