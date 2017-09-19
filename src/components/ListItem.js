import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback>
                <CardSection>
                    <Text style={titleStyle}>{this.props.library.title}</Text>
                </CardSection>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default connect(null, actions)(ListItem);