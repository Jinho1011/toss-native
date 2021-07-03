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
            let SIZE = 30;

            if (route.name === '홈') {
              return <Foundation name={'home'} size={SIZE} color={COLOR} />;
            } else if (route.name === '내 소비') {
              return (
                <FontAwesome5 name={'calendar'} size={SIZE} color={COLOR} />
              );
            } else if (route.name === '혜택') {
              return (
                <MaterialCommunityIcons
                  name={'star-four-points'}
                  size={SIZE}
                  color={COLOR}
                />
              );
            } else if (route.name === '주식') {
              return (
                <Foundation name={'mountains'} size={SIZE} color={COLOR} />
              );
            } else if (route.name === '전체') {
              return <FontAwesome5 name={'bars'} size={SIZE} color={COLOR} />;
            } else {
              return null;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#333D4A',
          tabStyle: {},
          labelStyle: {
            fontSize: 14,
          },
          iconStyle: {
            marginBottom: -10,
          },
          style: {
            height: 80,
            paddingBottom: 10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 30,
            elevation: 10,
            position: 'absolute',
          },
        }}>
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
