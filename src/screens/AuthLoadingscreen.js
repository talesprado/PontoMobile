import React, {Component} from 'react';
import {View, ActivityIndicator, StatusBar, StyleSheet, AsyncStorage, Text} from 'react-native';
import {authGetToken} from './../store/actions/index';

export default class AuthLoadingScreen extends Component {
    constructor () {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        console.log("nao atualizou");
        return dispatch => {
            dispatch(authGetToken)
            .catch(err => console.log(err))
            .then(storageToken => {
                const token = "abx";
                this.props.navigation.navigate(token ? 'App' : 'Auth');
            })
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Text>Carregando...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})