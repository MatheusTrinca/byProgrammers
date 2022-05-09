import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {icons, COLORS} from '../constants';
import {Home} from '../screens';

const Tab = createBottomTabNavigator();

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
        }}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        showLabel: false,
        tabBarStyle: {height: '10%'},
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{tintColor: tintColor, height: 20, width: 20}}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{tintColor: tintColor, height: 20, width: 20}}
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, height: 20, width: 20}}
                />
              );
            case 'Favorite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{tintColor: tintColor, height: 20, width: 20}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
