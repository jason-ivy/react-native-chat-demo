import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, View } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = this.props.state.userToken;
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { state: state.auth };
}

export default connect(mapStateToProps)(AuthLoadingScreen);