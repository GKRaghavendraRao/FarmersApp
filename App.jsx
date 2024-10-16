import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from './frontend/pages/ProfileScreen';
=======
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';

import WelcomeScreen from './frontend/pages/WelcomeScreen'; // New Welcome Screen
>>>>>>> d688c59 (first commit)
import MachineryComponent from './frontend/pages/MachineryComponent';
import CropsComponent from './frontend/pages/CropsComponent';
import CartScreen from './frontend/components/CartScreen';
import LoginScreen from './frontend/pages/LoginScreen';
import SignupScreen from './frontend/pages/SignupScreen';
<<<<<<< HEAD
import MarketPrices from './frontend/pages/MarketPrices';
import { CartProvider } from './frontend/pages/CartContext';
import { UserProvider } from './frontend/contexts/UserContext'; // Import UserProvider
=======
import ProfileScreen from './frontend/pages/ProfileScreen';
import { CartProvider } from './frontend/pages/CartContext';
>>>>>>> d688c59 (first commit)

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

<<<<<<< HEAD
function MarketPricesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Market Prices"
        component={MarketPrices}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

=======
// Tab Navigator for Machinery, Crops, and Cart (Profile handled separately)
>>>>>>> d688c59 (first commit)
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Machinery') {
<<<<<<< HEAD
            iconName = 'build';
          } else if (route.name === 'Crops') {
            iconName = 'eco';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
=======
            iconName = 'ios-build';
          } else if (route.name === 'Crops') {
            iconName = 'ios-leaf';
          } else if (route.name === 'Cart') {
            iconName = 'ios-cart';
>>>>>>> d688c59 (first commit)
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Machinery" component={MachineryComponent} />
      <Tab.Screen name="Crops" component={CropsComponent} />
      <Tab.Screen name="Cart" component={CartScreen} />
<<<<<<< HEAD
      <Tab.Screen name="Profile" component={ProfileScreen} />
=======
>>>>>>> d688c59 (first commit)
    </Tab.Navigator>
  );
}

<<<<<<< HEAD
function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen 
        name="Main" 
        component={MainTabNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Profile" // Ensure Profile screen is correctly named and registered
        component={ProfileScreen} 
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MarketPricesStack"
        component={MarketPricesStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
=======
// Stack Navigator for the overall app flow
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          
          {/* Welcome Screen */}
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} // Hide the header on the welcome screen
          />
          
          {/* Main Tab Screens (Machinery, Crops, Cart) */}
          <Stack.Screen 
            name="Main" 
            component={MainTabNavigator} 
            
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Login')}
                  title="Profile"
                  color="#000"
                />
              ),
            })}
          />

          {/* Profile-related screens */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
>>>>>>> d688c59 (first commit)
  );
}
