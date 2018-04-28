import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
// import { loginUser } from './../actions/auth';
import { Card, CardSection, Input, Button, Spinner } from './common';


const Profile = (props) => (
    <Card>
        <CardSection><Text></Text></CardSection>
        <CardSection>
            {props.pics[0] === undefined ? null :  <Image source={{ uri: props.pics[0].uri }} style={styles.itemContainer} />}
        </CardSection>
    </Card>
)

const windowSize = Dimensions.get('window');
const styles = {
  itemContainer: {
    width: windowSize.width,
    height: windowSize.height/2
  }
}
const mapStateToProps = (state) => {
    return {
        pics: state.pics,
        info: state.info
    }
}


export default connect(mapStateToProps)(Profile);