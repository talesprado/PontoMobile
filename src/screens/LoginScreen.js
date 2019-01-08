import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import FloatingLabelInput from './../UI/FloatingLabelInput';
import DefaultButton from './../UI/DefaultButton';
import {try_auth, authGetToken, authAutoSignIn} from './../store/actions/index';

class LoginScreen extends Component {
  state = {
    controls : {
      cartao: {
        value: '',
        valid: false,
        touched: false,
      },
      senha: {
        value: '',
        valid: false,
        touched: false
      }
    }
  };
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <View style={{width: '100%', flex: 1}}>
        <Image
          source={require ('./../img/chama.jpg')}
          style={{
            width: 100,
            height: 57,
            position: 'absolute',
            right: -10,
            top: -15,
          }}
          resizeMode="contain"
        />
        <Text
          style={{fontSize: 20, fontWeight: 'bold', left: 35, color: '#FFF'}}
        >
          Ponto Mobile
        </Text>
      </View>
    ),
  });

  loginHandler = () => {
    const authData = {
      cartao : this.state.controls.cartao,
      senha : this.state.controls.senha
    }
    this.props.onLogin(authData);    
  }

  updateInputState = (key, value) => {
    this.setState(prevState => {      
      return {
        controls: {
          ...prevState.controls,
          [key] : {
            value: value,
            valid: value !== '',
            touched: true,
          }
        }     
      } 
    })
  }

  render () {      
    return (
      <View style={styles.container}>
        <Text>nada por aqui</Text>
        <Image
          source={require ('./../img/logo_ufrgs_new.png')}
          style={{width: 100, marginBottom: 15}}
          resizeMode="contain"
        />
        <FloatingLabelInput
          label="Cartão UFRGS"
          value={this.state.controls.cartao.value}
          onChangeText={val => this.updateInputState('cartao', val)}
          keyboardType="numeric"
          maxLength={8}
        />

        <FloatingLabelInput
          label="Senha"
          secureTextEntry={true}
          value={this.state.controls.senha.value}
          onChangeText={val => this.updateInputState('senha', val)}
        />

        <DefaultButton
          style={styles.inputButton}
          title="Entrar"
          width="85%"
          onPress={this.loginHandler}
          disabled={!this.state.controls.cartao.valid || !this.state.controls.senha.valid}
        />

      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartao: state.auth.cartao,
    senha: state.auth.senha,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (authData) => dispatch (try_auth (authData)),
    onAutoSignIn: () => dispatch(authAutoSignIn())
  };
};



export default connect (mapStateToProps, mapDispatchToProps) (LoginScreen);

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
