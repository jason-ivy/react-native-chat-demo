import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Form, Item, Label, Input, Button, Row, Col, Text } from 'native-base';
import Line from '../../components/line/index';
import Reactotron from 'reactotron-react-native';

import { Creators } from '../../redux/auth';
import utils from '../../utils/index';
import {api, apis} from '../../apis/index';

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: '',
      time: 0
    }
    this.login = this.login.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.sendCode = this.sendCode.bind(this);
  }

  static navigationOptions = {
    title: '登录',
  };

  login() {
    const {phone, code} = this.state;
    const self = this;

    self.props.actions.login('eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Iiwic3ViIjoie1wiY…EyNH0.9um5Nuop2mJaV3uHClsxURGz1tbnqeqioILURKAdsNY');
    self.props.navigation.navigate('App');
    // api.get(apis.login, {
    //   phone,
    //   code,
    // }).then((res = {}) => {
    //   if(res.data) {
    //     if(res.data.res == 1) {
    //       const token = res.data.obj;
    //       self.props.actions.login(token);
    //       self.props.navigation.navigate('AuthLoading');
    //     } else {
    //       alert('登录失败，请重试');
    //     }
    //   }
    // })
  }

  changePhone(e) {
    this.setState({phone: e.nativeEvent.text || ''});
  }

  changeCode(e) {
    this.setState({code: e.nativeEvent.text || ''});
  }

  sendCode() {
    const {phone} = this.state;
    if(!phone || phone.length != 11) {
      alert('请输入正确的手机号');
      return
    }
    api.get(apis.sendCode, {
      phone: phone
    }).then(res => {
      console.log(res);
        if(res && res.data) {
          console.log(res.data);
          if(res.data.res == 1) {
            alert('验证码已发送');
          } else if(res.data.res == 303) {
            alert('请不要频繁发送');
          }
        }
      }, err => {
        Toast.show({
          text: '网络问题，请稍后重试'
        });
        console.log(err);
      });
  }

  render() {

    return (
      <Container>
        <Content>
          <Form style={{marginTop: 200, padding: 20}}>
            <Input placeholder="手机号" onChange={this.changePhone}/>
            <Line />
            <Row>
              <Col style={{flex: 3}}>
                <Input placeholder="验证码" onChange={this.changeCode}/>
                <Line />
              </Col>
              <Col style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableWithoutFeedback onPress={this.sendCode}>
                  <Text>获取验证码</Text>
                </TouchableWithoutFeedback>
              </Col>
            </Row>
            <Button block dark bordered style={styles.submit} onPress={this.login} >
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