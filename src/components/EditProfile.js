import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Confirm, TextArea } from './common';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';

import { startAddPics,  startGetPics } from '../actions/pics';

class EditProfile extends Component {
    state = {
        image: null,
        details: ''
    };

    componentDidMount() {
        this.imagePicker();
    }
    
    imagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [3, 3],
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        } else if (result.cancelled) {
            Actions.profile();
        }
    };

    submitPic = () => {
        this.props.startAddPics({ uri: this.state.image });
        this.setState(() => ({  image: null }));
        this.props.startGetPics();
        Actions.profile();
    };

    onAccept = () => {
        this.setState(() => ({ overModal: false }));
    };
    
    onDetailsChange = (text) => {
        const details = text;
        this.setState(() => ({ details }));
    };

    render() {
        return (
            <Card>
                <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.image ? <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} /> : null}
                </CardSection>
                {
                    this.state.image 
                        ?
                    (   <View>
                            <CardSection>
                                <TextArea
                                    label="Details"
                                    placeholder="Details"
                                    value={this.state.details}
                                    onChangeText={this.onDetailsChange}
                                    multiline={true}
                                    numberOfLines={4}
                                />
                            </CardSection>
                            <CardSection>
                                <Button onPress={this.submitPic}>Submit photo</Button>
                            </CardSection>
                        </View>
                    )
                        :
                    null
                }
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPics: (uri) => dispatch(startAddPics(uri)),
    startGetPics: () => dispatch(startGetPics())
});

export default connect(null, mapDispatchToProps)(EditProfile);