import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export const profileIcon = ({ deletePic }) => (
    <TouchableHighlight underlayColor='transparent' onPress={() => deletePic}>
        <Image style={{width: 20, height: 20, marginRight: 20 }} source={require('./../../../images/delete-icon.png')} />
    </TouchableHighlight>
)