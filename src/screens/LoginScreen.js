import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import FloatingLabelInput from './../UI/FloatingLabelInput';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Ponto Mobile',
  };

  state = {
    cartao: '',
    senha: '',
  };

  handleCartaoChange = newCartao => this.setState ({cartao: newCartao});
  handlePassChange = newPass => this.setState ({senha: newPass});

  render () {
    return (
      <View style={styles.container}>
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

        <Button
          style={styles.inputButton}
          title="                                Entrar                                "
          onPress={() => this.props.navigation.navigate ('Controle')}
        />

      </View>
    );
  }
}
export default LoginScreen;

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
