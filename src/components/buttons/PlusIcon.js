import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const PlusIcon = () => (
    <TouchableHighlight underlayColor='transparent' onPress={() => Actions.editProfile()}>
        <Image style={{width: 20, height: 20, marginLeft: 20 }} source={require('./../../../images/plus-icon.png')} />
    </TouchableHighlight>
)