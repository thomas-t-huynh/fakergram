import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';

import { startGetPics } from '../actions/pics';


class Profile extends Component {

    componentWillMount() {
        this.props.startGetPics();
    }

    grid = (pics) => {
        return (
        <FlatList
            data={pics}
            renderItem={({item}) => (
                <TouchableHighlight underlayColor='blue' onPress={() => {}} onShowUnderlay={() => Actions.picView({ id: item.id, uri: item.uri })} >
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
                {this.grid(this.props.pics)}
            </ScrollView>
        )
    }
}

const numColumns = 3;
const size = Dimensions.get('screen').width/numColumns;
const styles = {
  itemContainer: {
    width: size,
    height: size,
    backgroundColor: 'white'
  },
  item: {
    flex: 1,
    margin: 0.5
  }
};

const mapStateToProps = (state) => {
    return {
        pics: state.pics
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGetPics: () => dispatch(startGetPics())
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);