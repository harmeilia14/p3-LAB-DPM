import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import HomeScreen from './screens/HomeScreen';

// Ganti dengan path ke gambar yang sesuai
const backgroundImage = require('./assets/bg.jpg');

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Menempatkan konten di tengah
    alignItems: 'center',      // Menempatkan konten di tengah
    resizeMode: 'cover',       // Gambar merentang sesuai layar
  },
});
