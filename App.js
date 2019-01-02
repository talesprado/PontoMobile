import React, {Component} from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/LoginScreen';
import ControleScreen from './src/screens/ControleScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const AppStack = createBottomTabNavigator (
  {
    Controle: {
      screen: ControleScreen,
      navigationOptions: {
        tabBarLabel: 'Painel',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        ),
      },
    },
    Perfil: {
      screen: PerfilScreen,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
const AuthStack = createStackNavigator (
  {Auth: LoginScreen},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer (
  createSwitchNavigator (
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);