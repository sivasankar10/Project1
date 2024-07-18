import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    getUsername();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
    source={require('../assets/welcomegirl.jpeg')} // Replace with your background image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {username} to the App</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for stretching the image
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Semi-transparent background
  },
  welcomeText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
});

export default HomePage;
