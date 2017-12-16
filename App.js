import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { CaptureTimeScreen } from './src/screens/CaptureTimeScreen';
import { TabNavigator } from 'react-navigation';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {  
    const MainNavigator = TabNavigator({
      login: { screen: LoginScreen},
      main: {
        screen: TabNavigator({
          time: { screen: CaptureTimeScreen}
        })
      }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});