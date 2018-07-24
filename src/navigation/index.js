import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeNavigator from './home';
import ChatNavigator from './chat';
import MineNavigator from './mine';
import Auth from '../pages/auth';
import AuthLoading from '../pages/auth-loading';

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Chat: ChatNavigator,
  Mine: MineNavigator,
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: Auth,
    App: AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export function getCurrentScreen(navigationState) {
  if (!navigationState) {
      return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
      return getCurrentScreen(route)
  }
  return route.routeName
}