import React from 'react';
import { View, Text } from 'react-native';

export default class Mine extends React.PureComponent {
  static navigationOptions = {
    title: '我的'
  }

  render() {
    return (
      <View>
        <Text>我的</Text>
      </View>
    )
  }

}