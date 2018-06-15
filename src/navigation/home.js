import { createStackNavigator } from 'react-navigation';
import Home from '../pages/home';

const HomeNavigator = createStackNavigator({
  Home: {
      screen: Home
  }
});

export default HomeNavigator