import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner, Confirm, TextArea } from './common';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';

import { startEditInfo,  startGetInfo } from '../actions/info';

class EditProfile extends Component {
    state = {
        image: null,
        overModal: false,
        name: '',
        details: ''
    };

    componentWillMount() {
        this.props.startGetInfo();
    }

    startImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [3, 3],
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        };
    };

    startUpdateUserInfo = () => {
        Actions.profile();
    }

    submitPic = () => {
        const prevPics = this.props.pics;
        const addedNewPics =  prevPics.push(this.state.image);

        if (this.props.pics.length >= 5) {
            this.setState(() => ({ overModal: true }))
        } else {
            this.props.startEditInfo({uri: addedNewPics});
            this.setState(() => ({  image: null }));
            this.props.startGetInfo();    
        };
    
    };

    onAccept = () => {
        this.setState(() => ({ overModal: false }));
    };

    onNameChange = (text) => {
        const name = text;
        this.setState(() => ({ name }));
    };

    onDetailsChange = (text) => {
        const details = text;
        this.setState(() => ({ details }));
    };

    grid = (pics) => {
        return (
        <FlatList
            data={pics}
            renderItem={({item}) => (
                <TouchableHighlight underlayColor='blue' onPress={() => {}} onShowUnderlay={() => Actions.picView({ id: item.id, uri: item.uri, pics: this.state.pics })} >
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.uri }} style={styles.item} />
                    </View>
                </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns} />            
        )
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    {this.grid(this.props.pics)}
                    {console.log(this.props.pics)}
                    <CardSection>
                        <Button onPress={this.startImagePicker}>
                            Upload photo
                        </Button>
                    </CardSection>

                    <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                        {this.state.image ? <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} /> : null}
                    </CardSection>

                    {
                        this.state.image 
                            ?
                        (
                            <CardSection><Button onPress={this.submitPic}>Submit photo</Button></CardSection>
                        )
                            :
                        null
                    }
                    <Confirm
                        visible={this.state.overModal}
                        onAccept={this.onAccept}
                        acceptPhrase="Okay"
                    >
                        You can only have a maximum of 5 pictures.
                    </Confirm>

                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="ie: Thomas"
                            onChangeText={this.onNameChange}
                            value={this.state.name}
                        />
                    </CardSection>

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
                    <Button onPress={this.startUpdateUserInfo}>
                        Update Info
                    </Button>

                </Card>
            </ScrollView>
        )
    }
}

const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;
const styles = {
  itemContainer: {
    width: size,
    height: size,
    backgroundColor: 'white'
  },
  item: {
    flex: 1,
    margin: 3
  }
};



const mapStateToProps = (state) => {
    return {
        pics: state.info
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGetInfo: () => dispatch(startGetInfo()),
    startEditInfo: (info) => dispatch(startEditInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);