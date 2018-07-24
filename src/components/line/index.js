import {View, StyleSheet} from 'react-native';
import React from 'react';

export default class Line extends React.Component {
  render() {
    return (
      <View style={styles.line}></View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#eaeaea'
  }
});