import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {BlurView} from '@react-native-community/blur';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePresenter from './HomePresenter';

const Stack = createStackNavigator();

const HeaderLeftContainer = styled.View``;

const HeaderRightContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  margin-right: 20px;
`;

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePresenter}
        options={{
          title: '',
          headerLeft: () => <HeaderLeftContainer></HeaderLeftContainer>,
          headerRight: () => (
            <HeaderRightContainer>
              <Ionicons
                name={'chatbubble-ellipses'}
                size={28}
                color={'#B1B8C3'}
              />
              <Ionicons name={'notifications'} size={28} color={'#B1B8C3'} />
            </HeaderRightContainer>
          ),
          headerTitleStyle: {
            textAlign: 'center',
          },
          headerTransparent: true,
          headerBackground: () => (
            <BlurView
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              blurType="light"
              blurAmount={100}
              reducedTransparencyFallbackColor="white"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
