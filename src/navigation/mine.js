import { createStackNavigator } from 'react-navigation';
import Mine from '../pages/mine';

const MineNavigator = createStackNavigator({
  Mine: {
      screen: Mine
  }
});

export default MineNavigator