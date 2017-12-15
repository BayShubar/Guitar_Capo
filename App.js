import React from 'react'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import store from './app/store/index'
import MainScreen from './app/screens/MainScreen'

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: { screen: MainScreen  }
    });

    return (
      <Provider store={ store }>
        <MainNavigator/>
      </Provider>
    );
  }
}
