import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
=======
import { View, Text, Image, ScrollView, Button } from 'react-native';
>>>>>>> d688c59 (first commit)
import { useCart } from '../pages/CartContext'; // Adjust the import path as needed

export default function ToolDetail({ route }) {
  const { item } = route.params;
  const { addToCart } = useCart();

<<<<<<< HEAD
  const handleAddToCart = () => {
    const itemWithNumericPrice = {
      ...item,
      price: parseFloat(item.price.replace(',', '')), // Convert "5,000" to 5000
    };
    addToCart(itemWithNumericPrice);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <View style={styles.divider} />
      <Text style={styles.description}>
        {item.description}
      </Text>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>₹{item.price}</Text>
        <Button
          title="Add to Cart"
          onPress={handleAddToCart}
          color="#6200EE"
        />
=======
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#042211' }}>
      <Image source={item.image} style={{ width: 200, height: 200,borderRadius:20, alignSelf: 'center' }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16,color:'#acf7cc' }}>{item.name}</Text>
      <Text style={{ fontSize: 20, color: '#7bf6af',padding:5 }}>${item.price}</Text>
      <View style={{ borderBottomWidth: 1, borderColor: '#ccc', marginVertical: 16 }} />
      <Text style={{ fontSize: 16, color: '#d8f9e6' }}>
        This is a detailed description of the {item.name}. It includes all the features and benefits of this crop.
      </Text>
      <View style={{ borderBottomWidth: 1, borderColor: '#ccc', marginVertical: 16 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d8f9e6' }}>${item.price}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} color="#841584" />
>>>>>>> d688c59 (first commit)
      </View>
    </ScrollView>
  );
}
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#2d3748',
  },
  price: {
    fontSize: 20,
    color: '#4caf50',
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  footerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
  },
});
=======
>>>>>>> d688c59 (first commit)
