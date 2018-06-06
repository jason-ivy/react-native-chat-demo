import React, { Component } from 'react';
import { View, Image, TextInput, Text, StatusBar } from 'react-native';
import { Container, Content, Button, Icon, ListItem, Left, Right, Body } from 'native-base';
import {NimSession} from 'react-native-netease-im';
import {NavigationActions} from 'react-navigation';
import styles from './style';
import md5 from '../../utils/md5';

export default class Login extends Component {
    static navigationOptions = {
        title: '登录',
    };
    constructor(props) {
        super(props);
        this.state = {
            name:"abc1",
            password: '123456'
        };
    }
    componentWillUnmount() {
        //清除密码
        this.setState({password: ''});
    }

    loginIn() {
        const {navigation} = this.props;
        console.log(navigation)
        NimSession.login(this.state.name,md5.createHash(this.state.password)).then((data)=>{
            console.info(data);
            global.imaccount = this.state.name;
            navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Main'})
                ]
            }))
        },(err)=>{
            console.warn(err);
        })
    }
    
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="black" barStyle="dark-content"/>
                <Content alwaysBounceVertical={false}>
                    <View style={styles.content}>
                        <View style={styles.inputView}>
                            <Text style={styles.inputLabel}>账户</Text>
                            <TextInput
                                style={styles.textViewStyle}
                                value={this.state.name}
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                placeholder="请输入帐号"
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={name => {
                                            this.setState({name});
                                        }}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.inputLabel}>密码</Text>
                            <TextInput
                                style={styles.textViewStyle}
                                value={this.state.password}
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                placeholder="请输入密码"
                                onChangeText={password => {
                                                this.setState({password});
                                            }}
                            />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Button block onPress={() => this.loginIn()}>
                            <Text style={styles.buttonText}>登录</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

