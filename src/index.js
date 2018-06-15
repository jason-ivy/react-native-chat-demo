import './redux/config/reactotron';

import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, BackHandler, StatusBar } from 'react-native';
import AppNavigator, { getCurrentScreen } from './navigation/index';
import { NavigationActions } from 'react-navigation';
import { Theme } from "native-base-shoutem-theme";
import getTheme from '../native-base-theme/components';
import theme from './themes';
import { store, persistor } from './redux/config/store';

console.log('store', store.getState());

export default class App extends Component{

    componentWillMount() {
        Theme.setDefaultThemeStyle(getTheme(theme));
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
    }

    backHandle = () => {
        const currentScreen = getCurrentScreen(this.props.router)
        if (currentScreen === 'Login') {
            return true
        }
        if (currentScreen !== 'Home') {
            this.props.dispatch(NavigationActions.back())
            return true
        }
        return false
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={{flex:1}}>
                        <StatusBar backgroundColor="black"
                                barStyle="light-content"/>
                        <AppNavigator />
                    </View>
                </PersistGate>
            </Provider>
        )
    }
}
