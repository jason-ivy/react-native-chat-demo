import { createStackNavigator } from 'react-navigation';
import Home from '../pages/home';

const HomeNavigator = createStackNavigator({
  Home: {
      screen: Home
  }
}, {
  headerMode: 'none'
});

export default HomeNavigator