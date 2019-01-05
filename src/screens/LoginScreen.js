import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import FloatingLabelInput from './../UI/FloatingLabelInput';
import DefaultButton from './../UI/DefaultButton';
import { login} from './../store/actions/index';

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <View style={{width: "100%", flex: 1}}>
        <Image source={require('./../img/chama.jpg')} style={{width: 100, height: 57, position: 'absolute', right: -10, top: -15}} resizeMode="contain" />
        <Text style={{fontSize: 20, fontWeight:"bold", left: 35, color: "#FFF"}}>Ponto Mobile</Text>
      </View>),
  });

  state = {
    cartao: '',
    senha: '',
  };

  handleCartaoChange = newCartao => this.setState ({cartao: newCartao});
  handlePassChange = newPass => this.setState ({senha: newPass});

  render () {
    return (
      <View style={styles.container}>
        <Image source={require ('./../img/logo_ufrgs_new.png')} style={{width: 100, marginBottom:15 }} resizeMode="contain" />
        <FloatingLabelInput
          label="Cartão UFRGS"
          value={this.state.cartao}
          onChangeText={this.handleCartaoChange}
          keyboardType="numeric"
          maxLength={8}
        />

        <FloatingLabelInput
          label="Senha"
          secureTextEntry={true}
          value={this.state.senha}
          onChangeText={this.handlePassChange}
        />

        <DefaultButton
          style={styles.inputButton}
          title="Entrar"
          width="85%"
          onPress={this._signInAsync}
        />

      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }
}
const mapStateToProps = state =>{
  return{
    cartao: state.auth.cartao,
    senha: state.auth.senha
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin : () => dispatch(login())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputText: {
    width: '90%',
    borderColor: '#cecece',
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },
  inputButton: {
    width: 200,
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
});
