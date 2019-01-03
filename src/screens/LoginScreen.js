import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import FloatingLabelInput from './../UI/FloatingLabelInput';

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (<View><Image source={require('./../img/chama.jpg')} resizeMode="contain" /><Text>Ponto Mobile</Text></View>),
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
        <Image source={require ('./../img/logo_ufrgs_new.png')} style={{width: 100 }} resizeMode="contain" />
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
