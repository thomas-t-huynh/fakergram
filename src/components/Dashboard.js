import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// import { loginUser } from './../actions/auth';
import { Card, CardSection, Input, Button, Spinner } from './common';
import NavBar from './NavBar';

export default Dasboard = () => (
    <View style={{ flex: 1 }}>
        <Text>Dashboard</Text>
        <NavBar />
    </View>
)