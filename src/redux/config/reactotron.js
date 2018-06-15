import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';

Reactotron
  .configure()
  .useReactNative()
  .use(reduxPlugin())
  .connect()

  Reactotron.clear()