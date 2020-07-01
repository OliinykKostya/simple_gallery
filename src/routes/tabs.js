import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native'
import Home from '../screens/home';
import Gallery from '../screens/gallery';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/home-red.png')
                : require('../assets/home-black.png');
            } else if (route.name === 'Gallery') {
              iconName = focused
                ? require('../assets/list-red.png')
                : require('../assets/list-black.png');
            }

            return <Image source={iconName} style={{ width: 20, height: 20 }}
              resizeMode='contain'
            />;
          },
        })
        }
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Gallery" component={Gallery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs
