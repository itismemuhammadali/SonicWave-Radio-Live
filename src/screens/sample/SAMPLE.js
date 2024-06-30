import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback', true);

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sound, setSound] = useState(null);

  const playSound = () => {
    const audio = new Sound(
      'https://whmsonic.radio.gov.pk:7006/stream?type=http&nocache=7',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
        audio.play((success) => {
          if (!success) {
            console.log('Sound playback failed');
          }
        });
      }
    );
    setSound(audio);
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        sound.release();
      });
    }
    setSound(null);
  };

  const handlePlayButtonPress = () => {
    setModalVisible(true);
    playSound();
  };

  const handleStopButtonPress = () => {
    stopSound();
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Play Stream" onPress={handlePlayButtonPress} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          stopSound();
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Streaming Audio</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleStopButtonPress}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;