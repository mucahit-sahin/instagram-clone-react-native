import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Search from './Search';
import AddImage from './AddImage';
import Favorite from './Favorite';
import Profile from './Profile';
import HomeIcon from '../Components/icons/Home';
import SearchIcon from '../Components/icons/Search';
import AddIcon from '../Components/icons/Add';
import HeartIcon from '../Components/icons/Heart';
import ProfileIcon from '../Components/icons/User';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <HomeIcon name="Home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <SearchIcon name="Search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddImage"
          component={AddImage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <AddIcon name="AddImage" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <HeartIcon name="Favorite" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <ProfileIcon name="Profile" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
