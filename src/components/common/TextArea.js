import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextArea = ( { label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines } ) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 120,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { TextArea };