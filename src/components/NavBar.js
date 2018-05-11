import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ProfileIcon, PlusIcon } from './buttons';
import { Card, CardSection, Input, Button, Spinner } from './common';


class NavBar extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <ProfileIcon />
                <PlusIcon />
            </View>
        )
    }
}

const styles = {
    navBar: {
        height: 45,
        paddingTop: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
}

export default NavBar;