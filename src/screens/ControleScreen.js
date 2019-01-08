import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import DefaultButton from './../UI/DefaultButton';
import {connect } from 'react-redux';
import {authLogout} from './../store/actions/index';

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Controle Screen</Text>        
        <DefaultButton 
          style={styles.inputButton} 
          onPress={this.props.onLogout}
          title="Sair"
          width="90%"
          />
      </View>
    );
  }  
}
const mapDispatchToProps = dispatch => {
  return{
    onLogout: dispatch(authLogout())
  }
}
export default connect(null, mapDispatchToProps)(LoginScreen);

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
