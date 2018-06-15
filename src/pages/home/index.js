import React, { Component } from 'react';
import { View, Image, TextInput, Text, StatusBar, AsyncStorage } from 'react-native';
import { Container, Content, Button, Icon, ListItem, Left, Right, Body } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Chat');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="black" barStyle="dark-content"/>
                <Content alwaysBounceVertical={false}>
                    <Button onPress={this._showMoreApp}>
                        <Text>Show me more of the app</Text>
                    </Button>
                    <Button onPress={this._signOutAsync}>
                        <Text>Actually, sign me out :)</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}