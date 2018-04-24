import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const profileIcon = () => (
    <TouchableHighlight underlayColor='transparent' onPress={() => Actions.profile()}>
        <Image style={{width: 20, height: 20, marginLeft: 20 }} source={require('./../../../images/profile-icon.png')} />
    </TouchableHighlight>
)