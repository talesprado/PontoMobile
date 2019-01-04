import React from 'react';
import {View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Platform} from 'react-native';

const defaultButton = props => {
    const {
        accessibilityLabel,
        color,
        onPress,
        title,
        hasTVPreferredFocus,
        disabled,
        testID,
        width
      } = props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
    if(color){
        if (Platform.OS === 'ios'){
            textStyles.push({color : color});
        }else{
            buttonStyles.push({backgroundColor: color});
        }
    }
    if(width){
        buttonStyles.push({width: width});
    }
    const accessibilityStates = [];
    if(disabled){
        buttonStyles.push(styles.buttonDisabled);
        textStyles.push(styles.textDisabled);
        accessibilityStates.push('disabled');
    }
    const formattedTitle = 
        Platform.OS === 'android' ? title.toUpperCase() : title;

    const Touchable = 
        Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Touchable
            accessibilityLabel = {accessibilityLabel}
            accessibilityRole = "button"
            accessibilityStates = {accessibilityStates}
            hasTVPreferredFocus = {hasTVPreferredFocus}
            testID = {testID}
            disabled = {disabled}
            onPress = {onPress}
        >
            <View style={buttonStyles} disabled={disabled}>
                <Text style={textStyles} disabled={disabled}>
                    {formattedTitle}
                </Text>
            </View>
        </Touchable>
    )
}

const styles = StyleSheet.create({
    button: Platform.select({
        ios: {},
        android: {
            elevation: 4,
            backgroundColor: "#2196F3",
            borderRadius: 2,
        }      
    }),
    text : {
        textAlign: 'center',
        padding: 8,
        ...Platform.select({
            ios: {
                color: "#007AFF",
                fontSize: 18,
            },
            android: {
                color: 'white',
                fontWeight: '500'
            }
        })        
    },
    buttonDisabled: Platform.select({
        ios: {},
        android: {
            elevation: 0,
            backgroundColor: "#DFDFDF",
        },
    }),
    textDisabled: Platform.select({
        ios: {
            color: "#CDCDCD"
        },
        android: {
            color: "#a1a1a1"
        }
    })
  });

  export default defaultButton;