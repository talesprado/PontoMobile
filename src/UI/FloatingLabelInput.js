import React, {Component} from 'react';
import {Animated, View, TextInput, StyleSheet} from 'react-native';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount () {
    this._animatedIsFocused = new Animated.Value (
      this.props.value !== '' ? 1 : 0
    );
  }

  componentDidUpdate () {
    Animated.timing (this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duartion: 100,
    }).start ();
  }

  handleFocus = () => this.setState ({isFocused: true});
  handleBlur = () => this.setState ({isFocused: false});
  render () {
    const {label, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      color: this._animatedIsFocused.interpolate ({
        inputRange: [0, 1],
        outputRange: ['#000', '#cecece'],
      }),
      fontSize: this._animatedIsFocused.interpolate ({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      top: this._animatedIsFocused.interpolate ({
        inputRange: [0, 1],
        outputRange: [20, 0],
      }),
    };
    return (
      <View style={styles.inputContainer}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={styles.inputLabel}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  inputContainer: {
    width: '80%',
    paddingTop: 14,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    width: '100%',
    height: 45,
    fontSize: 15,
  },
});
