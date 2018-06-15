import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from '../pages/login';
import Chat from '../pages/Chat';
import ChatList from '../pages/ChatList';
import FriendList from '../pages/FriendList';
import FriendDetail from '../pages/FriendDetail';
import CreateTeam from '../pages/CreateTeam';
import NewFriend from '../pages/NewFriend';
import RemoveUsers from '../pages/RemoveUsers';
import SessionTeamDetail from '../pages/SessionTeamDetail';
import SessionUserDetail from '../pages/SessionUserDetail';
import SendAddFriend from '../pages/SendAddFriend';
import UpdateTeamName from '../pages/UpdateTeamName';
import SearchScreen from '../pages/SearchScreen';
import SelectUsers from '../pages/SelectUsers';

const MainNavigator = createStackNavigator({
    ChatList:{
        key:"index",
        screen: ChatList,
    },
    Chat: {
        screen: Chat,
    },
    FriendList: {
        screen: FriendList,
    },
    FriendDetail: {
        screen: FriendDetail,
    },
    UpdateTeamName: {
        screen: UpdateTeamName,
    },
    NewFriend: {
        screen: NewFriend,
    },
    SendAddFriend: {
        screen: SendAddFriend,
    },
    SessionTeamDetail: {
        screen: SessionTeamDetail,
    },
    SessionUserDetail: {
        screen: SessionUserDetail,
    }
},{
    headerMode: 'float',
    navigationOptions:{
        headerStyle:{
            backgroundColor:"#444"
        },
        headerTitleStyle:{
            color:"#fff"
        },
        headerBackTitleStyle:{
            color:"#fff"
        },
        headerTintColor:"#fff"
    }
});

const ChatNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Main: { 
        screen: MainNavigator 
    },
    CreateTeam: {
        screen: CreateTeam,
    },
    RemoveUsers: {
        screen: RemoveUsers,
    },
    SearchScreen:{
        screen: SearchScreen,
    },
    SelectUsers:{
        screen: SelectUsers,
    }
}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
      gesturesEnabled: false,
  },
  transitionConfig: () => ({
      transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps
          const { index } = scene

          const height = layout.initHeight
          const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [height, 0, 0],
          })

          const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index],
              outputRange: [0, 1, 1],
          })

          return { opacity, transform: [{ translateY }] }
      },
  }),
});

export default ChatNavigator;