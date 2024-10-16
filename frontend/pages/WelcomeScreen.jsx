import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> d688c59 (first commit)
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
<<<<<<< HEAD
    <View className='bg-zinc-900' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#011c0d' }}>
=======
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#011c0d' }}>
>>>>>>> d688c59 (first commit)
      <Text style={{ fontSize: 30, marginBottom: 20, color: 'white',}}>Welcome to the Farmer App</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Main')} // Navigate to Main (Machinery page)
      />
    </View>
  );
}
