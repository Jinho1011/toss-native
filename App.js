import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home/HomeContainer';
import Spent from './screens/Spent/SpentContainer';
import Benefit from './screens/Benefit/BenefitContainer';
import Stock from './screens/Stock/StockContainer';
import All from './screens/All/AllContainer';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Spent') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Benefit') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Stock') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'All') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={28} color={'#242424'} />;
          },
        })}
        tabBarOptions={{}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Spent" component={Spent} />
        <Tab.Screen name="Benefit" component={Benefit} />
        <Tab.Screen name="Stock" component={Stock} />
        <Tab.Screen name="All" component={All} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
