import React from 'react';
<<<<<<< HEAD
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
=======
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
>>>>>>> d688c59 (first commit)
import { useCart } from '../pages/CartContext'; // Adjust the import path as needed

export default function CartScreen() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()} // Ensure the key is unique and a string
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </Text>
                <Text style={styles.cartItemDescription}>
                  Short description about {item.name}.
                </Text>
              </View>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => addToCart(item)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#28a745',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#555',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#841584',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
=======
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is unique and a string
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 16, color: '#28a745' }}>${(item.price * item.quantity).toFixed(2)}</Text>
              <Text style={{ fontSize: 14, color: '#555' }}>Short description or details about {item.name}.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 30, color: '#841584' }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => addToCart(item)} style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 30, color: '#841584' }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
>>>>>>> d688c59 (first commit)
