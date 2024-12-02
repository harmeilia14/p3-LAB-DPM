import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LifecycleComponent from '../components/LifecycleComponent';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harmeilia Reski Rahmayani</Text>
      <Text style={styles.subtitle}>223510230</Text>
      <LifecycleComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FF1493',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF1493',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#e975ef',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
