import React from 'react';
import {StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Form, Item, Label, Input, Button, Row, Col, Text } from 'native-base';
import Line from '../../components/line/index';
import Reactotron from 'reactotron-react-native';

import { Creators } from '../../redux/auth';
import utils from '../../utils/index';

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }

  static navigationOptions = {
    title: '登录',
  };

  login() {
    this.props.actions.login();
    this.props.navigation.navigate('App');
  }

  changePhone(e) {
    this.props.actions.changePhone(e.nativeEvent.text || '');
  }

  render() {
    const {sendCode} = this.props.actions;

    return (
      <Container>
        <Content>
          <Form style={{marginTop: 200, padding: 20}}>
            <Input placeholder="手机号" onChange={this.changePhone} />
            <Line />
            <Row>
              <Col style={{flex: 3}}>
                <Input placeholder="验证码"/>
                <Line />
              </Col>
              <Col style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Text>获取验证码</Text>
              </Col>
            </Row>
            <Button block dark bordered style={styles.submit} onPress={sendCode} >
              <Text>登录</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(Creators, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AuthScreen);

const styles = StyleSheet.create({
  submit: {
    marginTop: 20
  }
});