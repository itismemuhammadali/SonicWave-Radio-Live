import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity, Modal, Button, BackHandler, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    const [sound, setSound] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause icon

    useEffect(() => {
        // Handle back button press
        const backAction = () => {
            if (modalVisible) {
                setModalVisible(false); // Close modal if open
                return true; // Prevent default behavior
            }
            return false; // Default back button behavior
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        // Clean up sound when component unmounts
        return () => {
            backHandler.remove(); // Remove back button listener
            if (sound) {
                sound.stop();
                sound.release();
            }
        };
    }, [modalVisible]);

    const playSound = (item) => {
        if (sound) {
            sound.stop();
            sound.release();
        }

        const newSound = new Sound(item.link, null, (error) => {
            if (error) {
                console.log('Failed to load sound', error);
                return;
            }
            setSound(newSound);
            setCurrentChannel(item.name); // Set current channel name
            setModalVisible(true);
            newSound.play((success) => {
                if (success) {
                    console.log('Sound played successfully');
                    setIsPlaying(true); // Update play/pause state
                } else {
                    console.log('Playback failed');
                }
            });
        });
    };

    const togglePlayPause = () => {
        if (sound) {
            if (isPlaying) {
                sound.pause();
                setIsPlaying(false);
            } else {
                sound.play();
                setIsPlaying(true);
            }
        }
    };

    const stopSound = () => {
        if (sound) {
            sound.stop();
            sound.release();
            setSound(null);
            setModalVisible(false);
            setCurrentChannel(null); // Clear current channel name
            setIsPlaying(false); // Reset play/pause state
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => playSound(item)}>
                <Image source={{ uri: item.poster }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={channels}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                contentContainerStyle={styles.list}
            />

            {/* Modal for controlling playback */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Close modal without affecting sound
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>{currentChannel}</Text>
                            <View style={styles.modalIcons}>
                                <TouchableOpacity onPress={togglePlayPause}>
                                    <Ionicons name={isPlaying ? "pause" : "play"} size={34} color="green" />
                                </TouchableOpacity>
                                <Ionicons name='stop-circle' size={34} color="green" onPress={stopSound} marginLeft={30} />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        fontSize: 15,
        textAlign: 'center',
        color: 'green',
        fontWeight:'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
    },
    modalIcons: {
        flexDirection: 'row',
    }
});

export default Home;
