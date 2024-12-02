import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LifecycleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lifecycle Count: {count}</Text>
      <Button
        title="Increase Count"
        onPress={() => setCount(count + 1)}
        color="#FF69B4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FF1493',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
});
