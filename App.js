import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            let COLOR = focused ? '#333D4A' : '#D1D6DC';
            let SIZE = 28;

            if (route.name === 'Home') {
              return <Foundation name={'home'} size={SIZE} color={COLOR} />;
            } else if (route.name === 'Spent') {
              return (
                <FontAwesome5 name={'calendar'} size={SIZE} color={COLOR} />
              );
            } else if (route.name === 'Benefit') {
              return (
                <MaterialCommunityIcons
                  name={'star-four-points'}
                  size={SIZE}
                  color={COLOR}
                />
              );
            } else if (route.name === 'Stock') {
              return (
                <Foundation name={'mountains'} size={SIZE} color={COLOR} />
              );
            } else if (route.name === 'All') {
              return <FontAwesome5 name={'bars'} size={SIZE} color={COLOR} />;
            }
          },
        })}
        tabBarOptions={{}}>
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="내 소비" component={Spent} />
        <Tab.Screen name="혜택" component={Benefit} />
        <Tab.Screen name="주식" component={Stock} />
        <Tab.Screen name="전체" component={All} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
