import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>
             Radio Pakistan
        </Text>
        <Text style={styles.text1}>
             Voice Of The Nation
        </Text>
        <Text style={styles.text2}>
             For Support and Feedback 
        </Text>
        <Text style={styles.text2}>
             E-mail us itwing@radio.gov.pk
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
  
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default AboutUs;
