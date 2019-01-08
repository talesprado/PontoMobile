import React, {Component} from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import NavigationService from './NavigationService';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/LoginScreen';
import ControleScreen from './src/screens/ControleScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingscreen';

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

const AppContainer = createAppContainer (
  createSwitchNavigator (
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      />
    )
  }
}
