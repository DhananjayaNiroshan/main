import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile';
import Home from '../Screen/Home';
import Discover from '../Screen/Discover';
import Images from '../Screen/Images';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({title: ''})}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({size = 25, focused}) => {
              return (
                <Image
                  style={{width: size, height: size, focused: focused}}
                  source={require('../Images/homeIcon.png')}
                />
              );
            },
          }}
          component={Home}
        />

        <Tab.Screen
          name="Discover"
          options={{
            tabBarIcon: ({size = 25, focused}) => {
              return (
                <Image
                  style={{width: size, height: size, focused: focused}}
                  source={require('../Images/search.png')}
                />
              );
            },
          }}
          component={Discover}
        />

        <Tab.Screen
          name="Images"
          options={{
            tabBarIcon: ({size = 25, focused}) => {
              return (
                <Image
                  style={{width: size, height: size, focused: focused}}
                  source={require('../Images/image.png')}
                />
              );
            },
          }}
          component={Images}
        />

        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({size = 25, focused}) => {
              return (
                <Image
                  style={{width: size, height: size, focused: focused}}
                  source={require('../Images/profile.jpg')}
                />
              );
            },
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

git 
next check
