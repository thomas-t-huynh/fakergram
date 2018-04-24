import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// import { loginUser } from './../actions/auth';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { createUser } from '../actions/auth';
import { Actions } from 'react-native-router-flux';


class Signup extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }


    onEmailChange = (text) => {
        const email = text;
        this.setState(() => ({ email }))
    }

    onPasswordChange = (text) => {
        this.setState(() => ({ password: text }))
    }

    onButtonPress =() => {
        let { email, password } = this.state;
        this.setState(() => ({ loading: true }))
        this.props.createUser({ email, password }).then(() => {
            this.setState(() => ({ loading: false }));
            Actions.login();
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={this.onPasswordChange}
                    />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'

    }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: ({email, password}) => dispatch(createUser({ email, password }))
});

export default connect(undefined, mapDispatchToProps)(Signup);
