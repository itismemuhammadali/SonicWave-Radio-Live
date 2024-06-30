import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Header = () => {
  const navigation = useNavigation();
  const navigateToAboutUs =() =>{
    navigation.navigate('AboutUs');
  };
  const navigateToMain =() =>{
    navigation.navigate('Main');
  };
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(-width))[0];

  const openDrawer = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const DrawerItem = ({ text, iconName, onPress }) => (
    <TouchableOpacity style={styles.drawerItemContainer} onPress={onPress}>
      <Text style={styles.drawerItem}>{text}</Text>
      <Ionicons name={iconName} size={24} color="green" style={styles.drawerIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuIconContainer}>
          <Ionicons name='menu' size={30} color='green' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RADIO PAKISTAN</Text>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeDrawer}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={closeDrawer}>
          <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
            <DrawerItem text="Home" iconName="home-outline"  onPress={navigateToMain}  />
            <DrawerItem text="Website" iconName="globe-outline" onPress={() => Linking.openURL('https://your-website-url.com')} />
            <DrawerItem text="Twitter" iconName="logo-twitter" onPress={() => Linking.openURL('https://twitter.com')} />
            <DrawerItem text="Facebook" iconName="logo-facebook" onPress={() => Linking.openURL('https://facebook.com')} />
            <DrawerItem text="Youtube" iconName="logo-youtube" onPress={() => Linking.openURL('https://youtube.com')} />
            <DrawerItem text="About Us" iconName="information-circle-outline" onPress={navigateToAboutUs} />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'green',
  },
  menuIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  drawer: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItem: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  drawerIcon: {
    marginRight: 10,
  },
});

export default Header;
