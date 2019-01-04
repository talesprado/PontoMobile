import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import DefaultButton from './../UI/DefaultButton';

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Controle Screen</Text>        
        <DefaultButton 
          style={styles.inputButton} 
          onPress={this._signOutAsync}
          title="Sair"
          width="90%"
          />
      </View>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  }
}
export default LoginScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputButton: {
    width: "90%"
  }
});
