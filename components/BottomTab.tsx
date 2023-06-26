import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Feed from './Feed';
import PlayList from './PlayList';
import HomeIcon from '../images/Home.png';
import searchIcon from '../images/search.png';
import feedIcon from '../images/feed.png';
import play from '../images/play.png';
import Providerr from '../Context/Providerr';

const Tab = createBottomTabNavigator();

export class BottomTab extends Component {
  render() {
    return (
<Providerr>


      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#CDE7BE',
          tabBarInactiveTintColor: '#E4DEEF',

          tabBarStyle: [
            {
              display: 'flex',
              height: 70,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: '#1D103A',
            },
            null,
          ],
          // tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#844DFB' : '#E4DEEF',
                }}
                source={HomeIcon}
                resizeMode="contain"
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
           
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
              // borderTopLeftRadius: 15,
              // borderTopRightRadius: 15,
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#844DFB' : '#E4DEEF',
                }}
                source={searchIcon}
                resizeMode="contain"
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#844DFB' : '#E4DEEF',
                }}
                source={feedIcon}
                resizeMode="contain"
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
        />
        <Tab.Screen
          name="PlayList"
          component={PlayList}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#844DFB' : '#E4DEEF',
                }}
                source={play}
                resizeMode="contain"
              />
            ),
            tabBarActiveBackgroundColor: '#1D103A',
            tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#844DFB',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: '400',
            },
          }}
        />
      </Tab.Navigator>
</Providerr>
    );
  }
}

export default BottomTab;
