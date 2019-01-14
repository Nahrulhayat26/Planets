import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screen/Home'
import SecondScreen from './screen/SecondScreen'
import { Provider } from 'react-redux'
import store from './store'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SecondScreen: {
    screen: SecondScreen
  },
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(RootStack)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer/>
      </Provider>
    )
  }
}

export default App