import React, { Component } from 'react';
import { View, Image, TextInput, StatusBar, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this._signOutAsync();
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
                <Header hasSegment style={styles.header}>
                <Left>
                    <Button transparent>
                        <Text style={styles.city}>杭州</Text>
                        <Icon name='arrow-down' style={styles.headerIcon}/>
                    </Button>
                </Left>
                <Body>
                    <Segment>
                        <Button first active><Text>推荐</Text></Button>
                        <Button second><Text>圈子</Text></Button>
                        <Button last><Text>邀约</Text></Button>
                    </Segment>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon type="MaterialIcons" name="directions" style={styles.headerIcon}/>
                    </Button>
                </Right>
                </Header>
                <Content padder>
                    <Text>Awesome segment</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },
    headerIcon: {
        color: '#0779fc',
    },
    city: {
        color: '#0779fc'
    }
})