import React, {Component} from 'react';
import {View, ActivityIndicator, StatusBar, StyleSheet, AsyncStorage, Text} from 'react-native';
import {authGetToken, authAutoSignIn} from './../store/actions/index';
import {connect} from 'react-redux';

class AuthLoadingScreen extends Component {
    constructor (props) {
        super(props);        
        this.props.onAutoSignIn();
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

const mapDispatchToProps = dispatch => {
    return {
        onAutoSignIn : () => dispatch(authAutoSignIn())
    }
}

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})